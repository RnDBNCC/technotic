import {
  ChangeEvent,
  DetailedHTMLProps,
  FormEvent,
  InputHTMLAttributes
} from 'react'

type SizeType = 'small' | 'medium' | 'large'
type State = 'success' | 'error'
export interface DatePickerProps
  extends DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
  > {
  dateSize?: SizeType
  status?: State

  onInputChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onSubmit?: (e: FormEvent) => void
}
