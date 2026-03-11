export const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxzSUKy395UN1Dd-j1HuoMzMi7-YUil7dO1PkYrS89FI2x7-y3Dg4_iI1VQarELYtE/exec";

export interface LeadData {
  name: string;
  whatsapp: string;
  email: string;
  origin?: string;
  page_path?: string;
  user_agent?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

export const submitLead = async (data: LeadData): Promise<{ ok: boolean; message: string }> => {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    
    const payload = {
      ...data,
      origin: data.origin || "lp-suzana",
      page_path: data.page_path || window.location.pathname,
      user_agent: data.user_agent || navigator.userAgent,
      utm_source: urlParams.get('utm_source') || "",
      utm_medium: urlParams.get('utm_medium') || "",
      utm_campaign: urlParams.get('utm_campaign') || "",
      utm_content: urlParams.get('utm_content') || "",
      utm_term: urlParams.get('utm_term') || "",
    };

    const response = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      // Using text/plain to avoid CORS preflight (OPTIONS request) which Apps Script does not support
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    return {
      ok: result.ok !== false,
      message: result.message || "Lead salvo com sucesso.",
    };
  } catch (error) {
    console.error("Error submitting lead:", error);
    return {
      ok: false,
      message: "Ocorreu um erro ao enviar seus dados. Por favor, tente novamente.",
    };
  }
};
