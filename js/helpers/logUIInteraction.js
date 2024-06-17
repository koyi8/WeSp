// func to log interaction
export const logUIInteraction = (module, event) => {
  const logUIEvent = new CustomEvent('interactionLog', {
    detail: {
      module: module,
      event: event,
    },
  });
  window.dispatchEvent(logUIEvent);
};
