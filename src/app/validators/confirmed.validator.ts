import { FormGroup, ValidatorFn } from '@angular/forms';
    
export function ConfirmedValidator(controlName: string, matchingControlName: string): ValidatorFn{
    return (formGroup: FormGroup): { [key: string]: boolean } | null  => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (control.value !== matchingControl.value) {
            return {'confirmed': true};
        }
        return null;
    }
}