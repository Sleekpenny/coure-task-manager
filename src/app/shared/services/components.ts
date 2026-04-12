import { Injectable } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular/standalone';

@Injectable({
  providedIn: 'root',
})
export class ComponentServices {

  popover: any;
  isAlertLoaded: boolean = false;

  constructor( public modalController: ModalController,      private alertController: AlertController,   private toastController: ToastController,) {}

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

  async presentConfirmAlert(
    header: string,
    subHeader: string,
    message: string,
    action: { actionText: string; cancelText?: string }
  ) {
    if (this.popover || this.isAlertLoaded) return;

    const buttonArray = [
      ...(action.cancelText ? [{ text: action.cancelText }] : []),
      {
        text: action.actionText,
        role: 'confirm',
      },
    ];

    this.popover = await this.alertController.create({
      header,
      subHeader,
      message,
      buttons: buttonArray,
    });
    await this.popover.present();

    const { role } = await this.popover.onDidDismiss();

    this.isAlertLoaded = false;
    if (role || role == undefined) this.popover = null;
    return role && role != 'backdrop' ? role : false;
  }
}
