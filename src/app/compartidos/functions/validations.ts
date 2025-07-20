import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function DateCantBeFuture(): ValidatorFn{
  return (control: AbstractControl) : ValidationErrors | null => {
      const dateSelected = control.value as Date;
      const today = new Date();
      if(dateSelected && dateSelected > today){
        return { future: 
          {
            message: 'La fecha no puede ser futura',
          }
         };
      }

      return null;
  }
}