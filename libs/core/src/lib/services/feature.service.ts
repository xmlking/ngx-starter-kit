import { Inject, Injectable } from '@angular/core';
import { WINDOW } from './window.token';

export enum BrowserFeatureKey {
  ServiceWorker = 'Service Worker',
  Cache = 'Offline Capabilities',
  PushAPI = 'Push data',
  NotificationsAPI = 'Notifications',
  BeforeInstallPromptEvent = 'Add to Homescreen',
  BackgroundSync = 'Background sync',
  NavigationPreloadManager = 'Navigation Preload',
  BudgetAPI = 'Budget API',
  StorageEstimation = 'Storage Estimation',
  PersistentStorage = 'Persistent Storage',
  WebShareAPI = 'Web Share',
  MediaSessionAPI = 'Media Session',
  MediaCapabilities = 'Media Capabilities',
  DeviceMemory = 'Device Memory',
  RelatedApps = 'Getting Installed Related Apps',
  PaymentRequestAPI = 'Payment Request',
  CredentialManagement = 'Credential Management',
  WebBluetoothAPI = 'Web Bluetooth',
  SpeechSynthesis = 'Speech Synthesis',
  SpeechRecognition = 'Speech Recognition',
}

export class BrowserFeature {
  constructor(public key: string, public supported: boolean) {}
}

@Injectable({
  providedIn: 'root',
})
export class FeatureService {
  private readonly navigator: Navigator;
  private readonly features: any;

  constructor(@Inject(WINDOW) private window: Window) {
    this.navigator = this.window.navigator;

    this.features = {
      [BrowserFeatureKey.ServiceWorker]: 'serviceWorker' in this.window.navigator,
      [BrowserFeatureKey.Cache]: 'caches' in this.window,
      [BrowserFeatureKey.PushAPI]: 'PushManager' in this.window,
      [BrowserFeatureKey.NotificationsAPI]: 'Notification' in this.window,
      [BrowserFeatureKey.BeforeInstallPromptEvent]: 'BeforeInstallPromptEvent' in this.window,
      [BrowserFeatureKey.BackgroundSync]: 'SyncManager' in this.window,
      [BrowserFeatureKey.NavigationPreloadManager]: 'NavigationPreloadManager' in this.window,
      [BrowserFeatureKey.BudgetAPI]: 'budget' in this.navigator && 'reserve' in (<any>this.navigator).budget,
      [BrowserFeatureKey.StorageEstimation]: 'storage' in this.navigator && 'estimate' in (<any>this.navigator).storage,
      [BrowserFeatureKey.PersistentStorage]: 'storage' in this.navigator && 'persist' in (<any>this.navigator).storage,
      [BrowserFeatureKey.WebShareAPI]: 'share' in this.navigator,
      [BrowserFeatureKey.MediaSessionAPI]: 'mediaSession' in this.navigator,
      [BrowserFeatureKey.MediaCapabilities]: 'mediaCapabilities' in this.navigator,
      [BrowserFeatureKey.DeviceMemory]: 'deviceMemory' in this.navigator,
      [BrowserFeatureKey.RelatedApps]: 'getInstalledRelatedApps' in this.navigator,
      [BrowserFeatureKey.PaymentRequestAPI]: 'PaymentRequest' in this.window,
      [BrowserFeatureKey.CredentialManagement]: 'credentials' in this.navigator,
      [BrowserFeatureKey.WebBluetoothAPI]: 'bluetooth' in this.navigator,
      [BrowserFeatureKey.SpeechSynthesis]: 'speechSynthesis' in this.window,
      [BrowserFeatureKey.SpeechRecognition]:
        'webkitSpeechRecognition' in this.window ||
        'mozSpeechRecognition' in this.window ||
        'msSpeechRecognition' in this.window ||
        'oSpeechRecognition' in this.window,
    };
  }

  detectFeatures(): Array<BrowserFeature> {
    return Object.keys(this.features).map(key => new BrowserFeature(key, this.features[key]));
  }

  detectFeature(feature: BrowserFeatureKey): BrowserFeature {
    return new BrowserFeature(feature, this.features[feature]);
  }

  isMobileAndroid(): boolean {
    return this.window.navigator.userAgent.toLowerCase().indexOf('android') > -1;
  }
}
