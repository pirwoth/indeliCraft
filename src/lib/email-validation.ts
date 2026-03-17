// Common email typo corrections
const DOMAIN_TYPOS: Record<string, string> = {
  "gnail.com": "gmail.com",
  "gmai.com": "gmail.com",
  "gmial.com": "gmail.com",
  "gmil.com": "gmail.com",
  "gmal.com": "gmail.com",
  "gamil.com": "gmail.com",
  "gmail.co": "gmail.com",
  "gmail.con": "gmail.com",
  "gmail.cm": "gmail.com",
  "gmail.om": "gmail.com",
  "gmaill.com": "gmail.com",
  "gmailcom": "gmail.com",
  "yaho.com": "yahoo.com",
  "yahooo.com": "yahoo.com",
  "yahoo.co": "yahoo.com",
  "yahoo.con": "yahoo.com",
  "yhaoo.com": "yahoo.com",
  "yhoo.com": "yahoo.com",
  "hotmal.com": "hotmail.com",
  "hotmai.com": "hotmail.com",
  "hotmial.com": "hotmail.com",
  "hotmail.co": "hotmail.com",
  "hotmail.con": "hotmail.com",
  "outlok.com": "outlook.com",
  "outloo.com": "outlook.com",
  "outlook.co": "outlook.com",
  "outlook.con": "outlook.com",
  "outloook.com": "outlook.com",
  "icloud.co": "icloud.com",
  "icoud.com": "icloud.com",
  "iclod.com": "icloud.com",
};

// Disposable/temporary email providers
const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com", "guerrillamail.com", "guerrillamail.net", "tempmail.com",
  "throwaway.email", "yopmail.com", "sharklasers.com", "guerrillamailblock.com",
  "grr.la", "dispostable.com", "maildrop.cc", "mailnesia.com", "trashmail.com",
  "trashmail.me", "trashmail.net", "fakeinbox.com", "tempail.com", "tempr.email",
  "temp-mail.org", "10minutemail.com", "mohmal.com", "burner.kiwi", "discard.email",
  "getnada.com", "mailtemp.org", "harakirimail.com", "jetable.org", "throwam.com",
  "tmail.ws", "tmpmail.net", "tmpmail.org", "emailondeck.com", "33mail.com",
  "maildrop.cc", "inboxbear.com", "spamgourmet.com", "mytemp.email",
  "temp-mail.io", "tempmailo.com", "tempmailaddress.com", "emailfake.com",
  "crazymailing.com", "armyspy.com", "dayrep.com", "einrot.com", "fleckens.hu",
  "gustr.com", "jourrapide.com", "rhyta.com", "superrito.com", "teleworm.us",
]);

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;

export interface EmailValidationResult {
  isValid: boolean;
  error?: string;
  suggestion?: string; // "Did you mean user@gmail.com?"
}

export function validateEmail(email: string): EmailValidationResult {
  const trimmed = email.trim().toLowerCase();

  if (!trimmed) {
    return { isValid: false, error: "Email address is required." };
  }

  if (!EMAIL_REGEX.test(trimmed)) {
    return { isValid: false, error: "Please enter a valid email address." };
  }

  const [localPart, domain] = trimmed.split("@");

  if (!domain) {
    return { isValid: false, error: "Please enter a valid email address." };
  }

  // Check disposable domains
  if (DISPOSABLE_DOMAINS.has(domain)) {
    return {
      isValid: false,
      error: "Temporary email addresses are not accepted. Please use a permanent email.",
    };
  }

  // Check for typos
  if (DOMAIN_TYPOS[domain]) {
    return {
      isValid: true,
      suggestion: `${localPart}@${DOMAIN_TYPOS[domain]}`,
    };
  }

  return { isValid: true };
}
