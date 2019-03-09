import { InjectionToken } from '@angular/core';
//The injectable to be used in components.
export const BROWSER_STORAGE =  new InjectionToken<Storage>('Browser Storage',{
    providedIn: 'root',
    //Hooking into localStorage via factory service to be injected into components as required.
    factory: () => localStorage
});

