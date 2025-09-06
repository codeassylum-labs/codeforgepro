export const runTrigger = async (trigger: string): Promise<string> => {
  switch (trigger) {
    case 'On Message': return 'Message received';
    case 'On Form Submit': return 'Form submitted';
    case 'On Schedule': return 'Scheduled time reached';
    case 'On API Call': return 'API call detected';
    default: return 'Unknown trigger';
  }
};
