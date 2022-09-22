export interface Def {
  key: string
  value: string
}

export type Info = Record<string, Def>
export type Infos = Info[]

export interface Preset {
  step: number
  infos: Infos
}

export interface BasicInfoProps {
  info: Info
}
