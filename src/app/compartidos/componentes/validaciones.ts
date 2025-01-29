import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function firstLetterMayus(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
      const valor = <string>control.value;

      if (!valor) return null;
      if(valor.length === 0) return null;
      const firstLetter = valor[0];

      if (firstLetter !== firstLetter.toUpperCase()) {
          return { firstLetterMayus: { text: 'First letter must be uppercase' } };
      }

      return null;
  }
}