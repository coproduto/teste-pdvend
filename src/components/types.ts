/* components/types.ts: Definições de tipos utilizados na definição dos componentes */

export interface BootstrapMeasurements {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xsHidden?: boolean;
  smHidden?: boolean;
  mdHidden?: boolean;
  lgHidden?: boolean;
}

export enum SenderType {
  SELF = 0,
  OTHER,
}

export interface OwnMessageSender {
  type: SenderType.SELF;
}

export interface OtherMessageSender {
  type: SenderType.OTHER;
  id: number;
}

export interface Message {
  sender: OwnMessageSender | OtherMessageSender;
  content: string;
}
