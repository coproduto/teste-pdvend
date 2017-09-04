/* lib/friends/types.ts: Define os tipos relacionados à simulação de contatos */

// Um contato tem um nome e um identificador
export interface Friend {
  name: string;
  id: number;
}

// Um contato simulado tem, além das propriedades citadas, a lógica de
// como responder a mensagens
export interface SimulatedFriend extends Friend {
  respond: (msg: string) => string;
}
