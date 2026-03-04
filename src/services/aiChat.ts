import { portfolioContext } from '@/data/portfolioContext';

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: number;
}

// Using Groq's free API - much faster and more reliable than HuggingFace
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const MODEL = 'llama-3.3-70b-versatile'; // Free tier model

/**
 * Get the API token from environment variables
 * Groq offers a generous free tier: 30 requests/minute
 * Get your free API key from: https://console.groq.com/keys
 */
function getApiToken(): string | null {
  // Support both GROQ and HF tokens for backward compatibility
  return import.meta.env.VITE_GROQ_API_TOKEN || import.meta.env.VITE_HF_API_TOKEN || null;
}

/**
 * Send a message to the AI and get a response
 */
export async function sendMessage(
  message: string,
  conversationHistory: ChatMessage[] = []
): Promise<string> {
  const apiToken = getApiToken();

  // If no API token is provided, return a helpful demo response
  if (!apiToken) {
    return getDemoResponse(message);
  }

  try {
    // Build messages array with system context
    const messages = [
      {
        role: 'system' as const,
        content: portfolioContext
      },
      ...conversationHistory.slice(-6).map(msg => ({ // Keep last 6 messages for context
        role: msg.role === 'user' ? 'user' as const : 'assistant' as const,
        content: msg.content
      })),
      {
        role: 'user' as const,
        content: message
      }
    ];

    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiToken}`,
      },
      body: JSON.stringify({
        model: MODEL,
        messages: messages,
        temperature: 0.7,
        max_tokens: 500,
        top_p: 0.95,
        stream: false,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));

      // Provide helpful error messages
      if (response.status === 401) {
        return "Invalid API token. Please check your VITE_GROQ_API_TOKEN in the .env file and make sure it's correct.";
      }
      if (response.status === 429) {
        return "Rate limit exceeded. Please wait a moment before trying again. Groq's free tier allows 30 requests per minute.";
      }
      if (response.status === 503) {
        return "The AI service is temporarily unavailable. Please try again in a moment. 🚀";
      }

      console.error('API Error:', response.status, errorData);
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();

    // Extract the assistant's response
    const assistantMessage = data.choices?.[0]?.message?.content;

    if (!assistantMessage) {
      throw new Error('No response generated');
    }

    return assistantMessage.trim();

  } catch (error) {
    console.error('Error calling Groq API:', error);

    // Fallback to demo mode on error
    return getDemoResponse(message);
  }
}

/**
 * Provide demo responses when API token is not available
 */
function getDemoResponse(message: string): string {
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes('skill') || lowerMessage.includes('technology')) {
    return `I'm a skilled SAP developer with 4+ years of experience specializing in:

**Backend:** ABAP RAP, CDS Views, OData, REST APIs
**Frontend:** SAP UI5, Fiori Elements, TypeScript
**Cloud:** SAP S/4HANA, SAP BTP
**Domain:** Production Planning (PP) and MRP

I've led end-to-end development of enterprise applications with exceptional customer adoption and received multiple awards including the SAP Drive Transformation Award (2025).

*Note: To get AI-powered responses, please add your Groq API token to the .env file as VITE_GROQ_API_TOKEN. Get a free token at https://console.groq.com/keys*`;
  }

  if (lowerMessage.includes('project') || lowerMessage.includes('work')) {
    return `My key projects include:

1. **Review Order Progress** - Led a cloud-native app achieving 154 customers in 6 months, consolidating multi-level BOM and production data
2. **Manage Material Coverage** - MRP app for production planning and shortage analysis
3. **Monitor Material Coverage** - Multi-segment coverage monitoring system
4. **Predictive MRP** - Simulation app for capacity planning

All projects focused on manufacturing, supply chain optimization, and enterprise cloud solutions.

*Note: To get AI-powered responses, please add your Groq API token to the .env file as VITE_GROQ_API_TOKEN. Get a free token at https://console.groq.com/keys*`;
  }

  if (lowerMessage.includes('experience') || lowerMessage.includes('background') || lowerMessage.includes('about')) {
    return `I'm currently a Software Developer at SAP in Garching, Germany, with 4+ years of professional experience:

- **Software Developer** (2023-Present): Leading architecture and development of RAP-based applications
- **Associate Software Developer** (2021-2022): Built cloud-native SAP Fiori applications
- **Working Student** (2020-2021): Developed Cloud Foundry applications

**Education:**
- M.Sc. Applied Computer Science - SRH Heidelberg (2019-2021)
- B.Sc. Computer Science & Engineering - India (2014-2018)

**Recent Achievements:**
- SAP Drive Transformation Award (2025)
- Service Reliability Champion (2024)
- SAP Certified Development Professional (2022)

*Note: To get AI-powered responses, please add your Groq API token to the .env file as VITE_GROQ_API_TOKEN. Get a free token at https://console.groq.com/keys*`;
  }

  if (lowerMessage.includes('education') || lowerMessage.includes('degree') || lowerMessage.includes('study')) {
    return `I hold two degrees in computer science:

**Master of Science in Applied Computer Science**
- SRH Heidelberg, Germany (2019-2021)
- Focus: Software Engineering, Cloud Computing, Enterprise Architecture
- Thesis: Voice assistive technology for health monitoring of older adults

**Bachelor of Science in Computer Science & Engineering**
- Government College of Engineering, Kalahandi, India (2014-2018)
- Strong foundation in algorithms, data structures, and systems design

*Note: To get AI-powered responses, please add your Groq API token to the .env file as VITE_GROQ_API_TOKEN. Get a free token at https://console.groq.com/keys*`;
  }

  if (lowerMessage.includes('sap') || lowerMessage.includes('fiori')) {
    return `I specialize in SAP technologies with deep expertise in:

- **SAP S/4HANA** (Public & Private Cloud)
- **ABAP RAP** (RESTful Application Programming)
- **SAP Fiori & UI5** (Fiori Elements, custom apps)
- **SAP BTP** (Business Technology Platform)
- **OData** (V2 & V4)
- **CDS Views** (data modeling and performance optimization)

I've led multiple high-impact projects in the PP/MRP domain, achieving exceptional customer adoption and improving manufacturing efficiency.

*Note: To get AI-powered responses, please add your Groq API token to the .env file as VITE_GROQ_API_TOKEN. Get a free token at https://console.groq.com/keys*`;
  }

  if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('email')) {
    return `You can reach out through the contact section at the bottom of this portfolio page! Feel free to connect for opportunities, collaborations, or just to say hello.

*Note: To get AI-powered responses, please add your Groq API token to the .env file as VITE_GROQ_API_TOKEN. Get a free token at https://console.groq.com/keys*`;
  }

  // Default response
  return `Hi! I can answer questions about:
- Skills and technologies
- Professional experience at SAP
- Key projects and achievements
- Education background
- Contact information

What would you like to know?

*Note: To get AI-powered responses, please add your Groq API token to the .env file as VITE_GROQ_API_TOKEN. Get a free token at https://console.groq.com/keys*`;
}

/**
 * Get suggested questions for the user
 */
export function getSuggestedQuestions(): string[] {
  return [
    "Summarize your skills and expertise",
    "What projects have you worked on at SAP?",
    "Tell me about your experience with Fiori",
    "What's your educational background?",
    "What awards have you received?",
  ];
}
