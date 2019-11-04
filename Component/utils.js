export function createUniqueIdentifier(message) {
	  return `${message.uuid}:${message.content}`;
	}
