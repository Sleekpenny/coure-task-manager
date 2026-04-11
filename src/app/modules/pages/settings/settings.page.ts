import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { PageContentComponent } from "@app/shared/components/layouts/page-content/page-content.component";
import { SettingsGroup } from '@app/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonIcon, IonContent, CommonModule, FormsModule, PageContentComponent]
})
export class SettingsPage {

  groups: SettingsGroup[] = [
    {
      title: 'Account',
      items: [
        {
          icon: 'person-outline',
          title: 'Profile',
          desc: 'Manage your name, photo and bio',
          type: 'chevron',
        },
        {
          icon: 'lock-closed-outline',
          title: 'Security & Password',
          desc: 'Two-factor auth, password reset',
          type: 'chevron',
        },
        {
          icon: 'shield-checkmark-outline',
          title: 'Privacy',
          desc: 'Data sharing and permissions',
          type: 'chevron',
        },
      ],
    },
    {
      title: 'Preferences',
      items: [
        {
          icon: 'notifications-outline',
          title: 'Notifications',
          desc: 'Push, email and in-app alerts',
          type: 'toggle',
          toggled: true,
        },
        {
          icon: 'color-palette-outline',
          title: 'Appearance',
          desc: 'Theme, accent color, font size',
          type: 'chevron',
        },
        {
          icon: 'language-outline',
          title: 'Language & Region',
          desc: 'Language, timezone and date format',
          type: 'chevron',
        },
        {
          icon: 'cloud-upload-outline',
          title: 'Auto Backup',
          desc: 'Sync data to cloud automatically',
          type: 'toggle',
          toggled: false,
        },
      ],
    },
    {
      title: 'Support',
      items: [
        {
          icon: 'help-circle-outline',
          title: 'Help & Feedback',
          desc: 'FAQs, report a bug, contact us',
          type: 'chevron',
        },
      ],
    },
  ]

}
