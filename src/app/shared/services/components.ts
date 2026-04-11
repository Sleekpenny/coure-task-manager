import { Injectable } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular/standalone';

@Injectable({
  providedIn: 'root',
})
export class ComponentServices {

  constructor( public modalController: ModalController,     private toastController: ToastController,) {}

  async presentModal(page: any, props: any, mode: any = 'md') {
    const modal = await this.modalController.create({
      component: page,
      mode,
      cssClass: 'my-modal-class',
      componentProps: props,
      canDismiss: true,
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    console.log('done');
  }
  
  async presentToast(message: string, color?: string) {
    const toast = await this.toastController.create({
      message: message,
      position: 'bottom',
      color: color ?? 'dark',
      duration: 2000,
    });
    toast.present();
  }
}
