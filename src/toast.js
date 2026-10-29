export const toast = (msg, type = 'ok') => window.dispatchEvent(new CustomEvent('toast', { detail: { msg, type, id: Math.random() } }))
