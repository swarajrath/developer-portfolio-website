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

  if (lowerMessage.includes('swaraj') || lowerMessage.includes('who are you') || lowerMessage.includes('about')) {
    return `**About Swaraj Rath**

Swaraj is an **SAP S/4HANA Infrastructure Expert & Developer** at SAP in Garching, Germany with 5+ years of experience.

**Key Highlights:**
- 🏆 SAP Drive Transformation Award (2025) - High-impact customer adoption
- 🛡️ Service Reliability Champion (2024) - Infrastructure stability excellence
- 💡 Technical SPOC for S/4HANA development infrastructure & cloud tooling
- 📈 Led projects with **154+ customer adoption** in 6 months
- 🎓 M.Sc. in Applied Computer Science from SRH Heidelberg

**Expertise:**
S/4HANA Public Cloud infrastructure, ABAP RAP development, CI/CD optimization, SAP BTP, Fiori Elements, and cloud-native architecture

*Note: To get AI-powered responses, please add your Groq API token to the .env file as VITE_GROQ_API_TOKEN. Get a free token at https://console.groq.com/keys*`;
  }

  if (lowerMessage.includes('skill') || lowerMessage.includes('technology')) {
    return `**Technical Expertise**

**S/4HANA Infrastructure & DevOps:**
- SAP Business Application Studio (BAS) migration & administration
- CI/CD pipeline optimization & transport management (gCTS)
- Cloud infrastructure stability & performance monitoring
- Azure, SAP BTP, cost optimization (TCO)

**Backend Development:**
- ABAP RESTful Application Programming Model (RAP)
- CDS Views (Basic, Composite, Consumption)
- OData V2/V4 & REST APIs
- Spring Boot

**Frontend Development:**
- SAP UI5 & Fiori Elements (List Report, Object Page)
- TypeScript
- Modern UX Guidelines & Accessibility

**Domain Expertise:**
- Production Planning (PP) & Material Requirements Planning (MRP)
- Supply Chain Optimization & Manufacturing Efficiency

**Awards:**
- 🏆 SAP Drive Transformation Award (2025)
- 🛡️ Service Reliability Champion (2024)
- ✅ SAP Certified Development Professional (2022)

*Note: To get AI-powered responses, please add your Groq API token to the .env file as VITE_GROQ_API_TOKEN. Get a free token at https://console.groq.com/keys*`;
  }

  if (lowerMessage.includes('project') || lowerMessage.includes('work')) {
    return `**Key Projects at SAP**

**1. Review Order Progress** 🚀
- Cloud-native app for production planning
- **154 customers in 6 months**
- Unified multi-level BOM and production data
- Tech: ABAP RAP, Fiori Elements V4, OData V4

**2. Manage Material Coverage (F0251A)**
- MRP app for shortage analysis
- Real-time stock/requirements visibility
- Direct corrective actions

**3. Monitor Material Coverage (F2101A)**
- Multi-segment coverage monitoring
- Granular shortage detection
- Configurable filters

**4. Predictive MRP (pMRP)**
- Simulation environment for planning scenarios
- Capacity constraint evaluation
- Risk-free demand analysis

*Note: To get AI-powered responses, please add your Groq API token to the .env file as VITE_GROQ_API_TOKEN. Get a free token at https://console.groq.com/keys*`;
  }

  if (lowerMessage.includes('experience') || lowerMessage.includes('background')) {
    return `**Professional Experience**

**Software Developer at SAP** (2023-Present)
- **SAP S/4HANA Infrastructure Expert:** Technical SPOC for development infrastructure, CILTS, and cloud tooling
- Led team migration to SAP Business Application Studio (BAS) with zero downtime
- Optimized CI/CD pipelines, gCTS transport management, and deployment automation
- Architecture and development of RAP-based applications for PP/MRP
- End-to-end application lifecycle ownership with infrastructure excellence
- Performance optimization, cloud stability, and cost-efficient resource management

**Associate Software Developer at SAP** (2021-2022)
- Cloud-native SAP Fiori applications on S/4HANA Public Cloud
- ABAP RAP and Fiori Elements V4 development
- CDS views optimization for large-scale transactional datasets

**Working Student at SAP** (2020-2021)
- Cloud Foundry applications development
- Data modeling and analytics pipelines

**Education:**
- **M.Sc. Applied Computer Science** - SRH Heidelberg (2019-2021)
- **B.Sc. Computer Science & Engineering** - India (2014-2018)

*Note: To get AI-powered responses, please add your Groq API token to the .env file as VITE_GROQ_API_TOKEN. Get a free token at https://console.groq.com/keys*`;
  }

  if (lowerMessage.includes('education') || lowerMessage.includes('degree') || lowerMessage.includes('study')) {
    return `**Education Background**

**Master of Science in Applied Computer Science**
- SRH Heidelberg, Germany (2019-2021)
- Grade: 1.6 (German grading scale)
- Focus: Software Engineering, Cloud Computing, Enterprise Architecture

**Bachelor of Science in Computer Science & Engineering**
- Government College of Engineering, Kalahandi, India (2014-2018)
- Grade: 1.8 (German grading scale)
- Foundation in algorithms, data structures, and systems design

**Master's Thesis:**
Voice assistive technology for health monitoring of older adults

*Note: To get AI-powered responses, please add your Groq API token to the .env file as VITE_GROQ_API_TOKEN. Get a free token at https://console.groq.com/keys*`;
  }

  if (lowerMessage.includes('sap') || lowerMessage.includes('fiori')) {
    return `**SAP S/4HANA & Infrastructure Expertise**

**Infrastructure & DevOps:**
- S/4HANA Public Cloud Infrastructure Management
- SAP Business Application Studio (BAS) - Expert & team migration leader
- CI/CD optimization, gCTS transport management, deployment automation
- Technical SPOC for development infrastructure & CILTS processes
- Cloud resource optimization & cost management (TCO)

**Core SAP Development:**
- SAP S/4HANA (Public & Private Cloud)
- ABAP RAP (RESTful Application Programming)
- SAP BTP (Business Technology Platform)

**UI/Frontend:**
- SAP Fiori & UI5
- Fiori Elements (List Report, Object Page)
- OData (V2 & V4)

**Data & Performance:**
- CDS Views (data modeling & optimization)
- Performance tuning for large transactional datasets
- HANA database optimization

**Domain:**
- Production Planning (PP)
- Material Requirements Planning (MRP)
- Manufacturing efficiency & supply chain optimization

**Recognition:**
Multiple awards including Infrastructure excellence and customer adoption leadership!

*Note: To get AI-powered responses, please add your Groq API token to the .env file as VITE_GROQ_API_TOKEN. Get a free token at https://console.groq.com/keys*`;
  }

  if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('email')) {
    return `**Get in Touch**

You can reach out through the **contact section** at the bottom of this portfolio page!

Feel free to connect for:
- Job opportunities
- Collaboration projects
- Technical discussions
- Or just to say hello! 👋

*Note: To get AI-powered responses, please add your Groq API token to the .env file as VITE_GROQ_API_TOKEN. Get a free token at https://console.groq.com/keys*`;
  }

  // Default response
  return `**Hi! I'm Swaraj's AI Assistant** 👋

I can answer questions about:

**Professional:**
- SAP S/4HANA Infrastructure & DevOps expertise
- Full-stack development skills and technologies
- Work experience at SAP
- Key projects and achievements
- Awards and recognition

**Personal:**
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
    "Tell me about Swaraj",
    "What are your key projects?",
    "Summarize your skills and expertise",
    "What's your educational background?",
    "What awards have you received?",
  ];
}
