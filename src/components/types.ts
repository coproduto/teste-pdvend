/* components/types.ts: Definições de tipos utilizados na definição dos componentes */

export interface BootstrapMeasurements {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xsHidden?: boolean;
}

export enum SenderType {
  SELF,
  OTHER,
}

export interface OwnMessageSender {
  type: SenderType.SELF;
}

export interface OtherMessageSender {
  type: SenderType.OTHER;
  id: number;
}

export type MessageSender = OwnMessageSender | OtherMessageSender;

export interface Message {
  sender: MessageSender;
  content: string;
}
