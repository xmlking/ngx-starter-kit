'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`<nav>
    <ul class="list">
        <li class="title">
            <a href="index.html" data-type="index-link">ngx-starter-kit documentation</a>
        </li>
        <li class="divider"></li>
        ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
</div>
` : '' }
        <li class="chapter">
            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
            <ul class="links">
                    <li class="link">
                        <a href="overview.html" data-type="chapter-link">
                            <span class="icon ion-ios-keypad"></span>Overview
                        </a>
                    </li>
                    <li class="link">
                        <a href="index.html" data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>README
                        </a>
                    </li>
                    <li class="link">
                            <a href="changelog.html"
                        data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>CHANGELOG
                        </a>
                    </li>
                    <li class="link">
                            <a href="contributing.html"
                        data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>CONTRIBUTING
                        </a>
                    </li>
                    <li class="link">
                        <a href="dependencies.html"
                            data-type="chapter-link">
                            <span class="icon ion-ios-list"></span>Dependencies
                        </a>
                    </li>
            </ul>
        </li>
        <li class="chapter modules">
            <a data-type="chapter-link" href="modules.html">
                <div class="menu-toggler linked" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                    <span class="icon ion-ios-archive"></span>
                    <span class="link-name">Modules</span>
                    <span class="icon ion-ios-arrow-down"></span>
                </div>
            </a>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                    <li class="link">
                        <a href="modules/AppConfirmModule.html" data-type="entity-link">AppConfirmModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AppConfirmModule-f6dd108e4ccb9c75954e020f220423b1"' : 'data-target="#xs-components-links-module-AppConfirmModule-f6dd108e4ccb9c75954e020f220423b1"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AppConfirmModule-f6dd108e4ccb9c75954e020f220423b1"' : 'id="xs-components-links-module-AppConfirmModule-f6dd108e4ccb9c75954e020f220423b1"' }>
                                        <li class="link">
                                            <a href="components/AppConfirmComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppConfirmComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-AppConfirmModule-f6dd108e4ccb9c75954e020f220423b1"' : 'data-target="#xs-injectables-links-module-AppConfirmModule-f6dd108e4ccb9c75954e020f220423b1"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-AppConfirmModule-f6dd108e4ccb9c75954e020f220423b1"' : 'id="xs-injectables-links-module-AppConfirmModule-f6dd108e4ccb9c75954e020f220423b1"' }>
                                        <li class="link">
                                            <a href="injectables/AppConfirmService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>AppConfirmService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#controllers-links-module-AppModule-ce142993c2bb15bcf0ed92501935a609"' : 'data-target="#xs-controllers-links-module-AppModule-ce142993c2bb15bcf0ed92501935a609"' }>
                                    <span class="icon ion-md-swap"></span>
                                    <span>Controllers</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="controllers-links-module-AppModule-ce142993c2bb15bcf0ed92501935a609"' : 'id="xs-controllers-links-module-AppModule-ce142993c2bb15bcf0ed92501935a609"' }>
                                        <li class="link">
                                            <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppController</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AppModule-bd6646d733f3e5b1d35a6a4c31340c4a-1"' : 'data-target="#xs-components-links-module-AppModule-bd6646d733f3e5b1d35a6a4c31340c4a-1"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AppModule-bd6646d733f3e5b1d35a6a4c31340c4a-1"' : 'id="xs-components-links-module-AppModule-bd6646d733f3e5b1d35a6a4c31340c4a-1"' }>
                                        <li class="link">
                                            <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#controllers-links-module-AuthModule-8f7d347e2db00a532b0bb78a65bcc2f5"' : 'data-target="#xs-controllers-links-module-AuthModule-8f7d347e2db00a532b0bb78a65bcc2f5"' }>
                                    <span class="icon ion-md-swap"></span>
                                    <span>Controllers</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="controllers-links-module-AuthModule-8f7d347e2db00a532b0bb78a65bcc2f5"' : 'id="xs-controllers-links-module-AuthModule-8f7d347e2db00a532b0bb78a65bcc2f5"' }>
                                        <li class="link">
                                            <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthController</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-AuthModule-8f7d347e2db00a532b0bb78a65bcc2f5"' : 'data-target="#xs-injectables-links-module-AuthModule-8f7d347e2db00a532b0bb78a65bcc2f5"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-AuthModule-8f7d347e2db00a532b0bb78a65bcc2f5"' : 'id="xs-injectables-links-module-AuthModule-8f7d347e2db00a532b0bb78a65bcc2f5"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WsJwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>WsJwtStrategy</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AuthModule-272d3310cebbc9ba5dbc5392bec8244b-1"' : 'data-target="#xs-components-links-module-AuthModule-272d3310cebbc9ba5dbc5392bec8244b-1"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AuthModule-272d3310cebbc9ba5dbc5392bec8244b-1"' : 'id="xs-components-links-module-AuthModule-272d3310cebbc9ba5dbc5392bec8244b-1"' }>
                                        <li class="link">
                                            <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-AuthModule-272d3310cebbc9ba5dbc5392bec8244b-1"' : 'data-target="#xs-injectables-links-module-AuthModule-272d3310cebbc9ba5dbc5392bec8244b-1"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-AuthModule-272d3310cebbc9ba5dbc5392bec8244b-1"' : 'id="xs-injectables-links-module-AuthModule-272d3310cebbc9ba5dbc5392bec8244b-1"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ROPCService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>ROPCService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/BreadcrumbsModule.html" data-type="entity-link">BreadcrumbsModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-BreadcrumbsModule-4dad4d0c51789809c772fcea98250a20"' : 'data-target="#xs-components-links-module-BreadcrumbsModule-4dad4d0c51789809c772fcea98250a20"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-BreadcrumbsModule-4dad4d0c51789809c772fcea98250a20"' : 'id="xs-components-links-module-BreadcrumbsModule-4dad4d0c51789809c772fcea98250a20"' }>
                                        <li class="link">
                                            <a href="components/BreadcrumbsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">BreadcrumbsComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/CdkModule.html" data-type="entity-link">CdkModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/ChatBoxModule.html" data-type="entity-link">ChatBoxModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-ChatBoxModule-5f302f9b352eed1f59fe10806fb999f4"' : 'data-target="#xs-components-links-module-ChatBoxModule-5f302f9b352eed1f59fe10806fb999f4"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-ChatBoxModule-5f302f9b352eed1f59fe10806fb999f4"' : 'id="xs-components-links-module-ChatBoxModule-5f302f9b352eed1f59fe10806fb999f4"' }>
                                        <li class="link">
                                            <a href="components/ChatBoxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChatBoxComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ChatCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChatCardComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TextToSpeechPreferencesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TextToSpeechPreferencesComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TypingIndicatorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TypingIndicatorComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-ChatBoxModule-5f302f9b352eed1f59fe10806fb999f4"' : 'data-target="#xs-injectables-links-module-ChatBoxModule-5f302f9b352eed1f59fe10806fb999f4"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-ChatBoxModule-5f302f9b352eed1f59fe10806fb999f4"' : 'id="xs-injectables-links-module-ChatBoxModule-5f302f9b352eed1f59fe10806fb999f4"' }>
                                        <li class="link">
                                            <a href="injectables/ChatService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>ChatService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/NlpService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>NlpService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SpeechToTextService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>SpeechToTextService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TextToSpeechService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>TextToSpeechService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/ChatModule.html" data-type="entity-link">ChatModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#controllers-links-module-ChatModule-59ef13cd084c7a2fa6cdae00a7c38f82"' : 'data-target="#xs-controllers-links-module-ChatModule-59ef13cd084c7a2fa6cdae00a7c38f82"' }>
                                    <span class="icon ion-md-swap"></span>
                                    <span>Controllers</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="controllers-links-module-ChatModule-59ef13cd084c7a2fa6cdae00a7c38f82"' : 'id="xs-controllers-links-module-ChatModule-59ef13cd084c7a2fa6cdae00a7c38f82"' }>
                                        <li class="link">
                                            <a href="controllers/ChatController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChatController</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-ChatModule-59ef13cd084c7a2fa6cdae00a7c38f82"' : 'data-target="#xs-injectables-links-module-ChatModule-59ef13cd084c7a2fa6cdae00a7c38f82"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-ChatModule-59ef13cd084c7a2fa6cdae00a7c38f82"' : 'id="xs-injectables-links-module-ChatModule-59ef13cd084c7a2fa6cdae00a7c38f82"' }>
                                        <li class="link">
                                            <a href="injectables/ChatService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>ChatService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/ClapModule.html" data-type="entity-link">ClapModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-ClapModule-ca1e7dee75321fa7ec1b61c2df0bd74d"' : 'data-target="#xs-components-links-module-ClapModule-ca1e7dee75321fa7ec1b61c2df0bd74d"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-ClapModule-ca1e7dee75321fa7ec1b61c2df0bd74d"' : 'id="xs-components-links-module-ClapModule-ca1e7dee75321fa7ec1b61c2df0bd74d"' }>
                                        <li class="link">
                                            <a href="components/ClapComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClapComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/CounterBubbleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CounterBubbleComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/FabComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FabComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/TotalCounterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">TotalCounterComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/ConfigModule.html" data-type="entity-link">ConfigModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/ContextMenuModule.html" data-type="entity-link">ContextMenuModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-ContextMenuModule-45120007c2feaef73f7b3734daae6eef"' : 'data-target="#xs-components-links-module-ContextMenuModule-45120007c2feaef73f7b3734daae6eef"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-ContextMenuModule-45120007c2feaef73f7b3734daae6eef"' : 'id="xs-components-links-module-ContextMenuModule-45120007c2feaef73f7b3734daae6eef"' }>
                                        <li class="link">
                                            <a href="components/ContextMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContextMenuComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-ContextMenuModule-45120007c2feaef73f7b3734daae6eef"' : 'data-target="#xs-directives-links-module-ContextMenuModule-45120007c2feaef73f7b3734daae6eef"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-ContextMenuModule-45120007c2feaef73f7b3734daae6eef"' : 'id="xs-directives-links-module-ContextMenuModule-45120007c2feaef73f7b3734daae6eef"' }>
                                        <li class="link">
                                            <a href="directives/ContextMenuTriggerDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContextMenuTriggerDirective</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/DashboardModule.html" data-type="entity-link">DashboardModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-DashboardModule-47201648c153f66eb26b7f54b5f236e8"' : 'data-target="#xs-components-links-module-DashboardModule-47201648c153f66eb26b7f54b5f236e8"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-DashboardModule-47201648c153f66eb26b7f54b5f236e8"' : 'id="xs-components-links-module-DashboardModule-47201648c153f66eb26b7f54b5f236e8"' }>
                                        <li class="link">
                                            <a href="components/DashboardLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardLayoutComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/OverviewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">OverviewComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/RainbowComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">RainbowComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/DraggableModule.html" data-type="entity-link">DraggableModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-DraggableModule-32398353710604c6f12c6c8189350e66"' : 'data-target="#xs-components-links-module-DraggableModule-32398353710604c6f12c6c8189350e66"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-DraggableModule-32398353710604c6f12c6c8189350e66"' : 'id="xs-components-links-module-DraggableModule-32398353710604c6f12c6c8189350e66"' }>
                                        <li class="link">
                                            <a href="components/ResizableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResizableComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-DraggableModule-32398353710604c6f12c6c8189350e66"' : 'data-target="#xs-directives-links-module-DraggableModule-32398353710604c6f12c6c8189350e66"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-DraggableModule-32398353710604c6f12c6c8189350e66"' : 'id="xs-directives-links-module-DraggableModule-32398353710604c6f12c6c8189350e66"' }>
                                        <li class="link">
                                            <a href="directives/DraggableDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DraggableDirective</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-DraggableModule-32398353710604c6f12c6c8189350e66"' : 'data-target="#xs-injectables-links-module-DraggableModule-32398353710604c6f12c6c8189350e66"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-DraggableModule-32398353710604c6f12c6c8189350e66"' : 'id="xs-injectables-links-module-DraggableModule-32398353710604c6f12c6c8189350e66"' }>
                                        <li class="link">
                                            <a href="injectables/ResizableState.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>ResizableState</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/EmailCoreModule.html" data-type="entity-link">EmailCoreModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/EmailModule.html" data-type="entity-link">EmailModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/ExperimentsModule.html" data-type="entity-link">ExperimentsModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-ExperimentsModule-c84439b0ebf4ab9337b62d41aeb68981"' : 'data-target="#xs-components-links-module-ExperimentsModule-c84439b0ebf4ab9337b62d41aeb68981"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-ExperimentsModule-c84439b0ebf4ab9337b62d41aeb68981"' : 'id="xs-components-links-module-ExperimentsModule-c84439b0ebf4ab9337b62d41aeb68981"' }>
                                        <li class="link">
                                            <a href="components/AnimationsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AnimationsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/CardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ClapButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClapButtonComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ContextMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContextMenuComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/FileUploadComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FileUploadComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ImageCompComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ImageCompComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/KnobDemoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">KnobDemoComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/LayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LayoutComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/LedDemoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LedDemoComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/StickyTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">StickyTableComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/VirtualScrollComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">VirtualScrollComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-ExperimentsModule-c84439b0ebf4ab9337b62d41aeb68981"' : 'data-target="#xs-directives-links-module-ExperimentsModule-c84439b0ebf4ab9337b62d41aeb68981"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-ExperimentsModule-c84439b0ebf4ab9337b62d41aeb68981"' : 'id="xs-directives-links-module-ExperimentsModule-c84439b0ebf4ab9337b62d41aeb68981"' }>
                                        <li class="link">
                                            <a href="directives/HammertimeDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">HammertimeDirective</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/GridModule.html" data-type="entity-link">GridModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-GridModule-d89be800e4397ab398fe3b6f5cfc5c97"' : 'data-target="#xs-components-links-module-GridModule-d89be800e4397ab398fe3b6f5cfc5c97"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-GridModule-d89be800e4397ab398fe3b6f5cfc5c97"' : 'id="xs-components-links-module-GridModule-d89be800e4397ab398fe3b6f5cfc5c97"' }>
                                        <li class="link">
                                            <a href="components/AccountDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountDetailComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/AccountEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountEditComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/AccountsGridListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountsGridListComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/AccountsTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountsTableComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-GridModule-d89be800e4397ab398fe3b6f5cfc5c97"' : 'data-target="#xs-injectables-links-module-GridModule-d89be800e4397ab398fe3b6f5cfc5c97"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-GridModule-d89be800e4397ab398fe3b6f5cfc5c97"' : 'id="xs-injectables-links-module-GridModule-d89be800e4397ab398fe3b6f5cfc5c97"' }>
                                        <li class="link">
                                            <a href="injectables/AccountService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>AccountService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RandomAccountService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>RandomAccountService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/HelperModule.html" data-type="entity-link">HelperModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#pipes-links-module-HelperModule-70cd14fd22744343d53db3a692abcb42"' : 'data-target="#xs-pipes-links-module-HelperModule-70cd14fd22744343d53db3a692abcb42"' }>
                                    <span class="icon ion-md-add"></span>
                                    <span>Pipes</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="pipes-links-module-HelperModule-70cd14fd22744343d53db3a692abcb42"' : 'id="xs-pipes-links-module-HelperModule-70cd14fd22744343d53db3a692abcb42"' }>
                                        <li class="link">
                                            <a href="pipes/FilterPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FilterPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/GroupByPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">GroupByPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/SafeHtmlPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SafeHtmlPipe</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/HomeModule.html" data-type="entity-link">HomeModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-HomeModule-495d47e671d2306fc2ba0ac1a2b0550b"' : 'data-target="#xs-components-links-module-HomeModule-495d47e671d2306fc2ba0ac1a2b0550b"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-HomeModule-495d47e671d2306fc2ba0ac1a2b0550b"' : 'id="xs-components-links-module-HomeModule-495d47e671d2306fc2ba0ac1a2b0550b"' }>
                                        <li class="link">
                                            <a href="components/AboutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AboutComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/BlogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">BlogComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/FeaturesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FeaturesComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/HomeLayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeLayoutComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/LandingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LandingComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-HomeModule-495d47e671d2306fc2ba0ac1a2b0550b"' : 'data-target="#xs-directives-links-module-HomeModule-495d47e671d2306fc2ba0ac1a2b0550b"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-HomeModule-495d47e671d2306fc2ba0ac1a2b0550b"' : 'id="xs-directives-links-module-HomeModule-495d47e671d2306fc2ba0ac1a2b0550b"' }>
                                        <li class="link">
                                            <a href="directives/StickyHeaderDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">StickyHeaderDirective</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/ImageComparisonModule.html" data-type="entity-link">ImageComparisonModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-ImageComparisonModule-86d6ae4841a19a54b8d2bfddf4281ad9"' : 'data-target="#xs-components-links-module-ImageComparisonModule-86d6ae4841a19a54b8d2bfddf4281ad9"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-ImageComparisonModule-86d6ae4841a19a54b8d2bfddf4281ad9"' : 'id="xs-components-links-module-ImageComparisonModule-86d6ae4841a19a54b8d2bfddf4281ad9"' }>
                                        <li class="link">
                                            <a href="components/ImageComparisonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ImageComparisonComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/JsonDiffModule.html" data-type="entity-link">JsonDiffModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-JsonDiffModule-6fd32bbdda98b1d209100b2c9e27475b"' : 'data-target="#xs-components-links-module-JsonDiffModule-6fd32bbdda98b1d209100b2c9e27475b"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-JsonDiffModule-6fd32bbdda98b1d209100b2c9e27475b"' : 'id="xs-components-links-module-JsonDiffModule-6fd32bbdda98b1d209100b2c9e27475b"' }>
                                        <li class="link">
                                            <a href="components/JsonDiffComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">JsonDiffComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/JsonDiffTreeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">JsonDiffTreeComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/LedModule.html" data-type="entity-link">LedModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-LedModule-166130b27451e96b469935b19233839d"' : 'data-target="#xs-components-links-module-LedModule-166130b27451e96b469935b19233839d"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-LedModule-166130b27451e96b469935b19233839d"' : 'id="xs-components-links-module-LedModule-166130b27451e96b469935b19233839d"' }>
                                        <li class="link">
                                            <a href="components/LedComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LedComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/LoadingOverlayModule.html" data-type="entity-link">LoadingOverlayModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-LoadingOverlayModule-cb7d1687a6663faa22369d203bb28b92"' : 'data-target="#xs-components-links-module-LoadingOverlayModule-cb7d1687a6663faa22369d203bb28b92"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-LoadingOverlayModule-cb7d1687a6663faa22369d203bb28b92"' : 'id="xs-components-links-module-LoadingOverlayModule-cb7d1687a6663faa22369d203bb28b92"' }>
                                        <li class="link">
                                            <a href="components/LoadingOverlayComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoadingOverlayComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/MaterialDateModule.html" data-type="entity-link">MaterialDateModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/MaterialModule.html" data-type="entity-link">MaterialModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-MaterialModule-a69e2dd7e7070fa0fba4cc815bba997d"' : 'data-target="#xs-components-links-module-MaterialModule-a69e2dd7e7070fa0fba4cc815bba997d"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-MaterialModule-a69e2dd7e7070fa0fba4cc815bba997d"' : 'id="xs-components-links-module-MaterialModule-a69e2dd7e7070fa0fba4cc815bba997d"' }>
                                        <li class="link">
                                            <a href="components/Card.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">Card</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/NavigatorModule.html" data-type="entity-link">NavigatorModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/NgLetModule.html" data-type="entity-link">NgLetModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-NgLetModule-a71d3dfa0088b1ee2b67e93b7e420fe8"' : 'data-target="#xs-directives-links-module-NgLetModule-a71d3dfa0088b1ee2b67e93b7e420fe8"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-NgLetModule-a71d3dfa0088b1ee2b67e93b7e420fe8"' : 'id="xs-directives-links-module-NgLetModule-a71d3dfa0088b1ee2b67e93b7e420fe8"' }>
                                        <li class="link">
                                            <a href="directives/NgLetDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NgLetDirective</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/NgxsWebsocketPluginModule.html" data-type="entity-link">NgxsWebsocketPluginModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/NotFoundModule.html" data-type="entity-link">NotFoundModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-NotFoundModule-0c3d7012ea013bd4ecc554eaf9a740e2"' : 'data-target="#xs-components-links-module-NotFoundModule-0c3d7012ea013bd4ecc554eaf9a740e2"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-NotFoundModule-0c3d7012ea013bd4ecc554eaf9a740e2"' : 'id="xs-components-links-module-NotFoundModule-0c3d7012ea013bd4ecc554eaf9a740e2"' }>
                                        <li class="link">
                                            <a href="components/NotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotFoundComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/NotificationsModule.html" data-type="entity-link">NotificationsModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#controllers-links-module-NotificationsModule-22001aed6ac34dc7c98eb4a8228baf0a"' : 'data-target="#xs-controllers-links-module-NotificationsModule-22001aed6ac34dc7c98eb4a8228baf0a"' }>
                                    <span class="icon ion-md-swap"></span>
                                    <span>Controllers</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="controllers-links-module-NotificationsModule-22001aed6ac34dc7c98eb4a8228baf0a"' : 'id="xs-controllers-links-module-NotificationsModule-22001aed6ac34dc7c98eb4a8228baf0a"' }>
                                        <li class="link">
                                            <a href="controllers/NotificationsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotificationsController</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-NotificationsModule-22001aed6ac34dc7c98eb4a8228baf0a"' : 'data-target="#xs-injectables-links-module-NotificationsModule-22001aed6ac34dc7c98eb4a8228baf0a"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-NotificationsModule-22001aed6ac34dc7c98eb4a8228baf0a"' : 'id="xs-injectables-links-module-NotificationsModule-22001aed6ac34dc7c98eb4a8228baf0a"' }>
                                        <li class="link">
                                            <a href="injectables/NotificationsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>NotificationsService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/NotificationsModule.html" data-type="entity-link">NotificationsModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-NotificationsModule-a3200aef4eba4246d607be69a1973e74-1"' : 'data-target="#xs-components-links-module-NotificationsModule-a3200aef4eba4246d607be69a1973e74-1"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-NotificationsModule-a3200aef4eba4246d607be69a1973e74-1"' : 'id="xs-components-links-module-NotificationsModule-a3200aef4eba4246d607be69a1973e74-1"' }>
                                        <li class="link">
                                            <a href="components/NotificationsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotificationsComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-NotificationsModule-a3200aef4eba4246d607be69a1973e74-1"' : 'data-target="#xs-injectables-links-module-NotificationsModule-a3200aef4eba4246d607be69a1973e74-1"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-NotificationsModule-a3200aef4eba4246d607be69a1973e74-1"' : 'id="xs-injectables-links-module-NotificationsModule-a3200aef4eba4246d607be69a1973e74-1"' }>
                                        <li class="link">
                                            <a href="injectables/NotificationsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>NotificationsService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/QuickpanelModule.html" data-type="entity-link">QuickpanelModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-QuickpanelModule-922738c7c10915a200a45e69bf728669"' : 'data-target="#xs-components-links-module-QuickpanelModule-922738c7c10915a200a45e69bf728669"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-QuickpanelModule-922738c7c10915a200a45e69bf728669"' : 'id="xs-components-links-module-QuickpanelModule-922738c7c10915a200a45e69bf728669"' }>
                                        <li class="link">
                                            <a href="components/QuickpanelComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">QuickpanelComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/RouterLinkMatchModule.html" data-type="entity-link">RouterLinkMatchModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-RouterLinkMatchModule-177fa8829d5f31cdd2100cdaf11fe405"' : 'data-target="#xs-directives-links-module-RouterLinkMatchModule-177fa8829d5f31cdd2100cdaf11fe405"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-RouterLinkMatchModule-177fa8829d5f31cdd2100cdaf11fe405"' : 'id="xs-directives-links-module-RouterLinkMatchModule-177fa8829d5f31cdd2100cdaf11fe405"' }>
                                        <li class="link">
                                            <a href="directives/RouterLinkMatchDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">RouterLinkMatchDirective</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/ScrollToTopModule.html" data-type="entity-link">ScrollToTopModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-ScrollToTopModule-d4713d2852731c928f3f1d1ccf2dfbda"' : 'data-target="#xs-components-links-module-ScrollToTopModule-d4713d2852731c928f3f1d1ccf2dfbda"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-ScrollToTopModule-d4713d2852731c928f3f1d1ccf2dfbda"' : 'id="xs-components-links-module-ScrollToTopModule-d4713d2852731c928f3f1d1ccf2dfbda"' }>
                                        <li class="link">
                                            <a href="components/ScrollToTopComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ScrollToTopComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/ScrollbarModule.html" data-type="entity-link">ScrollbarModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-ScrollbarModule-7495dca450f2a5b0fd058a652643af1a"' : 'data-target="#xs-components-links-module-ScrollbarModule-7495dca450f2a5b0fd058a652643af1a"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-ScrollbarModule-7495dca450f2a5b0fd058a652643af1a"' : 'id="xs-components-links-module-ScrollbarModule-7495dca450f2a5b0fd058a652643af1a"' }>
                                        <li class="link">
                                            <a href="components/ScrollbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ScrollbarComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-ScrollbarModule-7495dca450f2a5b0fd058a652643af1a"' : 'data-target="#xs-directives-links-module-ScrollbarModule-7495dca450f2a5b0fd058a652643af1a"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-ScrollbarModule-7495dca450f2a5b0fd058a652643af1a"' : 'id="xs-directives-links-module-ScrollbarModule-7495dca450f2a5b0fd058a652643af1a"' }>
                                        <li class="link">
                                            <a href="directives/ScrollbarDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ScrollbarDirective</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                    </li>
                    <li class="link">
                        <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-SharedModule-cbe920d9a8c5aa353d2b490b1157af36-1"' : 'data-target="#xs-directives-links-module-SharedModule-cbe920d9a8c5aa353d2b490b1157af36-1"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-SharedModule-cbe920d9a8c5aa353d2b490b1157af36-1"' : 'id="xs-directives-links-module-SharedModule-cbe920d9a8c5aa353d2b490b1157af36-1"' }>
                                        <li class="link">
                                            <a href="directives/ClickOutsideDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ClickOutsideDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/MinValidatorDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MinValidatorDirective</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/SidenavModule.html" data-type="entity-link">SidenavModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-SidenavModule-94f924f7098e562c2fbff0597e6b0973"' : 'data-target="#xs-components-links-module-SidenavModule-94f924f7098e562c2fbff0597e6b0973"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-SidenavModule-94f924f7098e562c2fbff0597e6b0973"' : 'id="xs-components-links-module-SidenavModule-94f924f7098e562c2fbff0597e6b0973"' }>
                                        <li class="link">
                                            <a href="components/MenuItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuItemComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SidenavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SidenavComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SidenavItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SidenavItemComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-SidenavModule-94f924f7098e562c2fbff0597e6b0973"' : 'data-target="#xs-directives-links-module-SidenavModule-94f924f7098e562c2fbff0597e6b0973"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-SidenavModule-94f924f7098e562c2fbff0597e6b0973"' : 'id="xs-directives-links-module-SidenavModule-94f924f7098e562c2fbff0597e6b0973"' }>
                                        <li class="link">
                                            <a href="directives/IconSidenavDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">IconSidenavDirective</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/SvgViewerModule.html" data-type="entity-link">SvgViewerModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-SvgViewerModule-84c86e2ff49d5e2c223c861b2e49d0f5"' : 'data-target="#xs-components-links-module-SvgViewerModule-84c86e2ff49d5e2c223c861b2e49d0f5"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-SvgViewerModule-84c86e2ff49d5e2c223c861b2e49d0f5"' : 'id="xs-components-links-module-SvgViewerModule-84c86e2ff49d5e2c223c861b2e49d0f5"' }>
                                        <li class="link">
                                            <a href="components/SvgViewerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SvgViewerComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-SvgViewerModule-84c86e2ff49d5e2c223c861b2e49d0f5"' : 'data-target="#xs-injectables-links-module-SvgViewerModule-84c86e2ff49d5e2c223c861b2e49d0f5"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-SvgViewerModule-84c86e2ff49d5e2c223c861b2e49d0f5"' : 'id="xs-injectables-links-module-SvgViewerModule-84c86e2ff49d5e2c223c861b2e49d0f5"' }>
                                        <li class="link">
                                            <a href="injectables/SvgViewerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>SvgViewerService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/ThemePickerModule.html" data-type="entity-link">ThemePickerModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-ThemePickerModule-048b2e3794bfe5650b86b3be946a853b"' : 'data-target="#xs-components-links-module-ThemePickerModule-048b2e3794bfe5650b86b3be946a853b"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-ThemePickerModule-048b2e3794bfe5650b86b3be946a853b"' : 'id="xs-components-links-module-ThemePickerModule-048b2e3794bfe5650b86b3be946a853b"' }>
                                        <li class="link">
                                            <a href="components/ThemePickerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ThemePickerComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-ThemePickerModule-048b2e3794bfe5650b86b3be946a853b"' : 'data-target="#xs-injectables-links-module-ThemePickerModule-048b2e3794bfe5650b86b3be946a853b"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-ThemePickerModule-048b2e3794bfe5650b86b3be946a853b"' : 'id="xs-injectables-links-module-ThemePickerModule-048b2e3794bfe5650b86b3be946a853b"' }>
                                        <li class="link">
                                            <a href="injectables/StyleManagerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>StyleManagerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ThemeStorageService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>ThemeStorageService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/ToolbarModule.html" data-type="entity-link">ToolbarModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-ToolbarModule-291da35af1a3ec167485294b690b1368"' : 'data-target="#xs-components-links-module-ToolbarModule-291da35af1a3ec167485294b690b1368"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-ToolbarModule-291da35af1a3ec167485294b690b1368"' : 'id="xs-components-links-module-ToolbarModule-291da35af1a3ec167485294b690b1368"' }>
                                        <li class="link">
                                            <a href="components/FullscreenToggleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">FullscreenToggleComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/QuickpanelToggleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">QuickpanelToggleComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SearchBarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchBarComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SidenavToggleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SidenavToggleComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ToolbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ToolbarComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/UserMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserMenuComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/TruncateModule.html" data-type="entity-link">TruncateModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#pipes-links-module-TruncateModule-42d1f87fa292da0e11509cf8d17939fa"' : 'data-target="#xs-pipes-links-module-TruncateModule-42d1f87fa292da0e11509cf8d17939fa"' }>
                                    <span class="icon ion-md-add"></span>
                                    <span>Pipes</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="pipes-links-module-TruncateModule-42d1f87fa292da0e11509cf8d17939fa"' : 'id="xs-pipes-links-module-TruncateModule-42d1f87fa292da0e11509cf8d17939fa"' }>
                                        <li class="link">
                                            <a href="pipes/CharactersPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CharactersPipe</a>
                                        </li>
                                        <li class="link">
                                            <a href="pipes/WordsPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">WordsPipe</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/UserModule.html" data-type="entity-link">UserModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#controllers-links-module-UserModule-9019712fd8bf4dfffe5c894fd43d8326"' : 'data-target="#xs-controllers-links-module-UserModule-9019712fd8bf4dfffe5c894fd43d8326"' }>
                                    <span class="icon ion-md-swap"></span>
                                    <span>Controllers</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="controllers-links-module-UserModule-9019712fd8bf4dfffe5c894fd43d8326"' : 'id="xs-controllers-links-module-UserModule-9019712fd8bf4dfffe5c894fd43d8326"' }>
                                        <li class="link">
                                            <a href="controllers/EmailController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmailController</a>
                                        </li>
                                        <li class="link">
                                            <a href="controllers/ProfileController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfileController</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-UserModule-9019712fd8bf4dfffe5c894fd43d8326"' : 'data-target="#xs-injectables-links-module-UserModule-9019712fd8bf4dfffe5c894fd43d8326"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-UserModule-9019712fd8bf4dfffe5c894fd43d8326"' : 'id="xs-injectables-links-module-UserModule-9019712fd8bf4dfffe5c894fd43d8326"' }>
                                        <li class="link">
                                            <a href="injectables/ProfileService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>ProfileService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/WidgetsModule.html" data-type="entity-link">WidgetsModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-WidgetsModule-c5d9f7f3343af3d9e72b74d6823cdd18"' : 'data-target="#xs-components-links-module-WidgetsModule-c5d9f7f3343af3d9e72b74d6823cdd18"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-WidgetsModule-c5d9f7f3343af3d9e72b74d6823cdd18"' : 'id="xs-components-links-module-WidgetsModule-c5d9f7f3343af3d9e72b74d6823cdd18"' }>
                                        <li class="link">
                                            <a href="components/AudienceOverviewWidgetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AudienceOverviewWidgetComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/Card.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">Card</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/CardContent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardContent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/CardHeader.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardHeader</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ChartWidget.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChartWidget</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ChartWidgetContent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChartWidgetContent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ChartWidgetHeader.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChartWidgetHeader</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/DonutChartWidgetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DonutChartWidgetComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/LineChartWidgetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LineChartWidgetComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ListComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/MarketWidgetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">MarketWidgetComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/QuickInfoWidgetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">QuickInfoWidgetComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/RealtimeUsersWidgetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">RealtimeUsersWidgetComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/RecentSalesWidgetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">RecentSalesWidgetComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/RecentSalesWidgetTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">RecentSalesWidgetTableComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SalesSummaryWidgetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SalesSummaryWidgetComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/WizdashComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">WizdashComponent</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#directives-links-module-WidgetsModule-c5d9f7f3343af3d9e72b74d6823cdd18"' : 'data-target="#xs-directives-links-module-WidgetsModule-c5d9f7f3343af3d9e72b74d6823cdd18"' }>
                                    <span class="icon ion-md-code-working"></span>
                                    <span>Directives</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="directives-links-module-WidgetsModule-c5d9f7f3343af3d9e72b74d6823cdd18"' : 'id="xs-directives-links-module-WidgetsModule-c5d9f7f3343af3d9e72b74d6823cdd18"' }>
                                        <li class="link">
                                            <a href="directives/AspectRatioContentDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AspectRatioContentDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/AspectRatioDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AspectRatioDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/PageDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/PagePaddingDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PagePaddingDirective</a>
                                        </li>
                                </ul>
                            </li>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#injectables-links-module-WidgetsModule-c5d9f7f3343af3d9e72b74d6823cdd18"' : 'data-target="#xs-injectables-links-module-WidgetsModule-c5d9f7f3343af3d9e72b74d6823cdd18"' }>
                                    <span class="icon ion-md-arrow-round-down"></span>
                                    <span>Injectables</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="injectables-links-module-WidgetsModule-c5d9f7f3343af3d9e72b74d6823cdd18"' : 'id="xs-injectables-links-module-WidgetsModule-c5d9f7f3343af3d9e72b74d6823cdd18"' }>
                                        <li class="link">
                                            <a href="injectables/WizdashService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules"}>WizdashService</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#components-links"' : 'data-target="#xs-components-links"' }>
                        <span class="icon ion-md-cog"></span>
                        <span>Components</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AdvancedPieChartWidgetComponent.html" data-type="entity-link">AdvancedPieChartWidgetComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BarChartWidgetComponent.html" data-type="entity-link">BarChartWidgetComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ContextMenuComponent-1.html" data-type="entity-link">ContextMenuComponent</a>
                            </li>
                    </ul>
                </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#directives-links"' : 'data-target="#xs-directives-links"' }>
                        <span class="icon ion-md-code-working"></span>
                        <span>Directives</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                            <li class="link">
                                <a href="directives/CardActions.html" data-type="entity-link">CardActions</a>
                            </li>
                            <li class="link">
                                <a href="directives/CardHeaderActions.html" data-type="entity-link">CardHeaderActions</a>
                            </li>
                            <li class="link">
                                <a href="directives/CardHeaderSubTitle.html" data-type="entity-link">CardHeaderSubTitle</a>
                            </li>
                            <li class="link">
                                <a href="directives/CardHeaderTitle.html" data-type="entity-link">CardHeaderTitle</a>
                            </li>
                            <li class="link">
                                <a href="directives/ChartWidgetHeaderActions.html" data-type="entity-link">ChartWidgetHeaderActions</a>
                            </li>
                            <li class="link">
                                <a href="directives/ChartWidgetHeaderSubTitle.html" data-type="entity-link">ChartWidgetHeaderSubTitle</a>
                            </li>
                            <li class="link">
                                <a href="directives/ChartWidgetHeaderTitle.html" data-type="entity-link">ChartWidgetHeaderTitle</a>
                            </li>
                            <li class="link">
                                <a href="directives/ClickOutsideDirective-1.html" data-type="entity-link">ClickOutsideDirective</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"' }>
                <span class="icon ion-ios-paper"></span>
                <span>Classes</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                    <li class="link">
                        <a href="classes/Account.html" data-type="entity-link">Account</a>
                    </li>
                    <li class="link">
                        <a href="classes/AddMessage.html" data-type="entity-link">AddMessage</a>
                    </li>
                    <li class="link">
                        <a href="classes/AddNotification.html" data-type="entity-link">AddNotification</a>
                    </li>
                    <li class="link">
                        <a href="classes/AddNotification-1.html" data-type="entity-link">AddNotification</a>
                    </li>
                    <li class="link">
                        <a href="classes/Address.html" data-type="entity-link">Address</a>
                    </li>
                    <li class="link">
                        <a href="classes/AdvancedPieChartWidgetOptions.html" data-type="entity-link">AdvancedPieChartWidgetOptions</a>
                    </li>
                    <li class="link">
                        <a href="classes/Animations.html" data-type="entity-link">Animations</a>
                    </li>
                    <li class="link">
                        <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                    </li>
                    <li class="link">
                        <a href="classes/AudienceOverviewWidgetOptions.html" data-type="entity-link">AudienceOverviewWidgetOptions</a>
                    </li>
                    <li class="link">
                        <a href="classes/AuditBase.html" data-type="entity-link">AuditBase</a>
                    </li>
                    <li class="link">
                        <a href="classes/AuthModeChanged.html" data-type="entity-link">AuthModeChanged</a>
                    </li>
                    <li class="link">
                        <a href="classes/AuthState.html" data-type="entity-link">AuthState</a>
                    </li>
                    <li class="link">
                        <a href="classes/AuthenticateWebSocket.html" data-type="entity-link">AuthenticateWebSocket</a>
                    </li>
                    <li class="link">
                        <a href="classes/BarChartWidgetOptions.html" data-type="entity-link">BarChartWidgetOptions</a>
                    </li>
                    <li class="link">
                        <a href="classes/Base.html" data-type="entity-link">Base</a>
                    </li>
                    <li class="link">
                        <a href="classes/BaseRemoteService.html" data-type="entity-link">BaseRemoteService</a>
                    </li>
                    <li class="link">
                        <a href="classes/BaseRepository.html" data-type="entity-link">BaseRepository</a>
                    </li>
                    <li class="link">
                        <a href="classes/Browser.html" data-type="entity-link">Browser</a>
                    </li>
                    <li class="link">
                        <a href="classes/ChangeAuthMode.html" data-type="entity-link">ChangeAuthMode</a>
                    </li>
                    <li class="link">
                        <a href="classes/ChartWidgetOptions.html" data-type="entity-link">ChartWidgetOptions</a>
                    </li>
                    <li class="link">
                        <a href="classes/ChatBoxState.html" data-type="entity-link">ChatBoxState</a>
                    </li>
                    <li class="link">
                        <a href="classes/ChatBoxStateModel.html" data-type="entity-link">ChatBoxStateModel</a>
                    </li>
                    <li class="link">
                        <a href="classes/ChatGateway.html" data-type="entity-link">ChatGateway</a>
                    </li>
                    <li class="link">
                        <a href="classes/ChatMessage.html" data-type="entity-link">ChatMessage</a>
                    </li>
                    <li class="link">
                        <a href="classes/CloseConversation.html" data-type="entity-link">CloseConversation</a>
                    </li>
                    <li class="link">
                        <a href="classes/Color.html" data-type="entity-link">Color</a>
                    </li>
                    <li class="link">
                        <a href="classes/ConnectWebSocket.html" data-type="entity-link">ConnectWebSocket</a>
                    </li>
                    <li class="link">
                        <a href="classes/Conversation.html" data-type="entity-link">Conversation</a>
                    </li>
                    <li class="link">
                        <a href="classes/CreateNewConversation.html" data-type="entity-link">CreateNewConversation</a>
                    </li>
                    <li class="link">
                        <a href="classes/CreateNotificationDto.html" data-type="entity-link">CreateNotificationDto</a>
                    </li>
                    <li class="link">
                        <a href="classes/CreateUserDto.html" data-type="entity-link">CreateUserDto</a>
                    </li>
                    <li class="link">
                        <a href="classes/CrudController.html" data-type="entity-link">CrudController</a>
                    </li>
                    <li class="link">
                        <a href="classes/CrudService.html" data-type="entity-link">CrudService</a>
                    </li>
                    <li class="link">
                        <a href="classes/CustomRouterStateSerializer.html" data-type="entity-link">CustomRouterStateSerializer</a>
                    </li>
                    <li class="link">
                        <a href="classes/DeleteNotification.html" data-type="entity-link">DeleteNotification</a>
                    </li>
                    <li class="link">
                        <a href="classes/DeleteNotification-1.html" data-type="entity-link">DeleteNotification</a>
                    </li>
                    <li class="link">
                        <a href="classes/DisconnectWebSocket.html" data-type="entity-link">DisconnectWebSocket</a>
                    </li>
                    <li class="link">
                        <a href="classes/DonutChartWidgetOptions.html" data-type="entity-link">DonutChartWidgetOptions</a>
                    </li>
                    <li class="link">
                        <a href="classes/EmailDto.html" data-type="entity-link">EmailDto</a>
                    </li>
                    <li class="link">
                        <a href="classes/EmailModuleOptions.html" data-type="entity-link">EmailModuleOptions</a>
                    </li>
                    <li class="link">
                        <a href="classes/EntitiesComponent.html" data-type="entity-link">EntitiesComponent</a>
                    </li>
                    <li class="link">
                        <a href="classes/Entity.html" data-type="entity-link">Entity</a>
                    </li>
                    <li class="link">
                        <a href="classes/EntityColumnDef.html" data-type="entity-link">EntityColumnDef</a>
                    </li>
                    <li class="link">
                        <a href="classes/EntityDataSource.html" data-type="entity-link">EntityDataSource</a>
                    </li>
                    <li class="link">
                        <a href="classes/EntityFormComponent.html" data-type="entity-link">EntityFormComponent</a>
                    </li>
                    <li class="link">
                        <a href="classes/EntityNotFoundFilter.html" data-type="entity-link">EntityNotFoundFilter</a>
                    </li>
                    <li class="link">
                        <a href="classes/EntityService.html" data-type="entity-link">EntityService</a>
                    </li>
                    <li class="link">
                        <a href="classes/EventBusGateway.html" data-type="entity-link">EventBusGateway</a>
                    </li>
                    <li class="link">
                        <a href="classes/FetchConversations.html" data-type="entity-link">FetchConversations</a>
                    </li>
                    <li class="link">
                        <a href="classes/FetchNotifications.html" data-type="entity-link">FetchNotifications</a>
                    </li>
                    <li class="link">
                        <a href="classes/HttpAuthException.html" data-type="entity-link">HttpAuthException</a>
                    </li>
                    <li class="link">
                        <a href="classes/Image.html" data-type="entity-link">Image</a>
                    </li>
                    <li class="link">
                        <a href="classes/LineChartWidgetOptions.html" data-type="entity-link">LineChartWidgetOptions</a>
                    </li>
                    <li class="link">
                        <a href="classes/ListColumn.html" data-type="entity-link">ListColumn</a>
                    </li>
                    <li class="link">
                        <a href="classes/LoadProfile.html" data-type="entity-link">LoadProfile</a>
                    </li>
                    <li class="link">
                        <a href="classes/Login.html" data-type="entity-link">Login</a>
                    </li>
                    <li class="link">
                        <a href="classes/LoginCanceled.html" data-type="entity-link">LoginCanceled</a>
                    </li>
                    <li class="link">
                        <a href="classes/LoginPage.html" data-type="entity-link">LoginPage</a>
                    </li>
                    <li class="link">
                        <a href="classes/LoginSuccess.html" data-type="entity-link">LoginSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/Logout.html" data-type="entity-link">Logout</a>
                    </li>
                    <li class="link">
                        <a href="classes/LogoutSuccess.html" data-type="entity-link">LogoutSuccess</a>
                    </li>
                    <li class="link">
                        <a href="classes/Mail.html" data-type="entity-link">Mail</a>
                    </li>
                    <li class="link">
                        <a href="classes/MarkAllAsRead.html" data-type="entity-link">MarkAllAsRead</a>
                    </li>
                    <li class="link">
                        <a href="classes/MarkAsRead.html" data-type="entity-link">MarkAsRead</a>
                    </li>
                    <li class="link">
                        <a href="classes/MarkAsRead-1.html" data-type="entity-link">MarkAsRead</a>
                    </li>
                    <li class="link">
                        <a href="classes/MenuState.html" data-type="entity-link">MenuState</a>
                    </li>
                    <li class="link">
                        <a href="classes/Message.html" data-type="entity-link">Message</a>
                    </li>
                    <li class="link">
                        <a href="classes/MyHammerConfig.html" data-type="entity-link">MyHammerConfig</a>
                    </li>
                    <li class="link">
                        <a href="classes/NavbarPage.html" data-type="entity-link">NavbarPage</a>
                    </li>
                    <li class="link">
                        <a href="classes/NextCurrentlyOpened.html" data-type="entity-link">NextCurrentlyOpened</a>
                    </li>
                    <li class="link">
                        <a href="classes/NgLetContext.html" data-type="entity-link">NgLetContext</a>
                    </li>
                    <li class="link">
                        <a href="classes/Notification.html" data-type="entity-link">Notification</a>
                    </li>
                    <li class="link">
                        <a href="classes/Notification-1.html" data-type="entity-link">Notification</a>
                    </li>
                    <li class="link">
                        <a href="classes/NotificationsState.html" data-type="entity-link">NotificationsState</a>
                    </li>
                    <li class="link">
                        <a href="classes/PreferenceState.html" data-type="entity-link">PreferenceState</a>
                    </li>
                    <li class="link">
                        <a href="classes/PreloadSelectedModulesList.html" data-type="entity-link">PreloadSelectedModulesList</a>
                    </li>
                    <li class="link">
                        <a href="classes/Profile.html" data-type="entity-link">Profile</a>
                    </li>
                    <li class="link">
                        <a href="classes/ProfileLoaded.html" data-type="entity-link">ProfileLoaded</a>
                    </li>
                    <li class="link">
                        <a href="classes/RealtimeUsersWidgetOptions.html" data-type="entity-link">RealtimeUsersWidgetOptions</a>
                    </li>
                    <li class="link">
                        <a href="classes/RequestContext.html" data-type="entity-link">RequestContext</a>
                    </li>
                    <li class="link">
                        <a href="classes/RxSocketioSubject.html" data-type="entity-link">RxSocketioSubject</a>
                    </li>
                    <li class="link">
                        <a href="classes/SaveConversation.html" data-type="entity-link">SaveConversation</a>
                    </li>
                    <li class="link">
                        <a href="classes/SendMessage.html" data-type="entity-link">SendMessage</a>
                    </li>
                    <li class="link">
                        <a href="classes/SendTyping.html" data-type="entity-link">SendTyping</a>
                    </li>
                    <li class="link">
                        <a href="classes/SendWebSocketAction.html" data-type="entity-link">SendWebSocketAction</a>
                    </li>
                    <li class="link">
                        <a href="classes/SetIconMode.html" data-type="entity-link">SetIconMode</a>
                    </li>
                    <li class="link">
                        <a href="classes/StartVoiceCommand.html" data-type="entity-link">StartVoiceCommand</a>
                    </li>
                    <li class="link">
                        <a href="classes/StateDef.html" data-type="entity-link">StateDef</a>
                    </li>
                    <li class="link">
                        <a href="classes/Store.html" data-type="entity-link">Store</a>
                    </li>
                    <li class="link">
                        <a href="classes/Subject.html" data-type="entity-link">Subject</a>
                    </li>
                    <li class="link">
                        <a href="classes/SvgViewerConfig.html" data-type="entity-link">SvgViewerConfig</a>
                    </li>
                    <li class="link">
                        <a href="classes/SvgViewerDefaultConfig.html" data-type="entity-link">SvgViewerDefaultConfig</a>
                    </li>
                    <li class="link">
                        <a href="classes/SwitchConversation.html" data-type="entity-link">SwitchConversation</a>
                    </li>
                    <li class="link">
                        <a href="classes/ToggleCurrentlyOpened.html" data-type="entity-link">ToggleCurrentlyOpened</a>
                    </li>
                    <li class="link">
                        <a href="classes/ToggleCurrentlyOpenedByRoute.html" data-type="entity-link">ToggleCurrentlyOpenedByRoute</a>
                    </li>
                    <li class="link">
                        <a href="classes/Tree.html" data-type="entity-link">Tree</a>
                    </li>
                    <li class="link">
                        <a href="classes/UiAction.html" data-type="entity-link">UiAction</a>
                    </li>
                    <li class="link">
                        <a href="classes/UpdateUserDto.html" data-type="entity-link">UpdateUserDto</a>
                    </li>
                    <li class="link">
                        <a href="classes/User.html" data-type="entity-link">User</a>
                    </li>
                    <li class="link">
                        <a href="classes/User-1.html" data-type="entity-link">User</a>
                    </li>
                    <li class="link">
                        <a href="classes/WebSocketConnected.html" data-type="entity-link">WebSocketConnected</a>
                    </li>
                    <li class="link">
                        <a href="classes/WebSocketDisconnected.html" data-type="entity-link">WebSocketDisconnected</a>
                    </li>
                    <li class="link">
                        <a href="classes/WebsocketMessageError.html" data-type="entity-link">WebsocketMessageError</a>
                    </li>
                    <li class="link">
                        <a href="classes/WsAuthException.html" data-type="entity-link">WsAuthException</a>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                        ${ isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"' }>
                        <span class="icon ion-md-arrow-round-down"></span>
                        <span>Injectables</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                            <li class="link">
                                <a href="injectables/AnimationsService.html" data-type="entity-link">AnimationsService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/ConfigService.html" data-type="entity-link">ConfigService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/DeepLinkService.html" data-type="entity-link">DeepLinkService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/EmailService.html" data-type="entity-link">EmailService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/ErrorsInterceptor.html" data-type="entity-link">ErrorsInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="injectables/EventBus.html" data-type="entity-link">EventBus</a>
                            </li>
                            <li class="link">
                                <a href="injectables/FileUploadService.html" data-type="entity-link">FileUploadService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/InMemoryDataService.html" data-type="entity-link">InMemoryDataService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/LoggingInterceptor.html" data-type="entity-link">LoggingInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="injectables/MediaQueryService.html" data-type="entity-link">MediaQueryService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/MenuService.html" data-type="entity-link">MenuService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/PageTitleService.html" data-type="entity-link">PageTitleService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/RequestContextMiddleware.html" data-type="entity-link">RequestContextMiddleware</a>
                            </li>
                            <li class="link">
                                <a href="injectables/ServiceWorkerService.html" data-type="entity-link">ServiceWorkerService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/TimeoutInterceptor.html" data-type="entity-link">TimeoutInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="injectables/TransformInterceptor.html" data-type="entity-link">TransformInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="injectables/WebSocketHandler.html" data-type="entity-link">WebSocketHandler</a>
                            </li>
                            <li class="link">
                                <a href="injectables/WebSocketSubject.html" data-type="entity-link">WebSocketSubject</a>
                            </li>
                            <li class="link">
                                <a href="injectables/WrapInterceptor.html" data-type="entity-link">WrapInterceptor</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#interceptors-links"' : 'data-target="#xs-interceptors-links"' }>
                <span class="icon ion-ios-swap"></span>
                <span>Interceptors</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                    <li class="link">
                        <a href="interceptors/ErrorInterceptor.html" data-type="entity-link">ErrorInterceptor</a>
                    </li>
                    <li class="link">
                        <a href="interceptors/JwtInterceptor.html" data-type="entity-link">JwtInterceptor</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                 ${ isNormalMode ? 'data-target="#guards-links"' : 'data-target="#xs-guards-links"' }>
            <span class="icon ion-ios-lock"></span>
            <span>Guards</span>
            <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
                ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                <li class="link">
                    <a href="guards/AllowGuard.html" data-type="entity-link">AllowGuard</a>
                </li>
                <li class="link">
                    <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                </li>
                <li class="link">
                    <a href="guards/AuthGuard-1.html" data-type="entity-link">AuthGuard</a>
                </li>
                <li class="link">
                    <a href="guards/ComposeGuard.html" data-type="entity-link">ComposeGuard</a>
                </li>
                <li class="link">
                    <a href="guards/RoleGuard.html" data-type="entity-link">RoleGuard</a>
                </li>
                <li class="link">
                    <a href="guards/WsAuthGuard.html" data-type="entity-link">WsAuthGuard</a>
                </li>
            </ul>
            </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
                ${ isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"' }>
                <span class="icon ion-md-information-circle-outline"></span>
                <span>Interfaces</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                    <li class="link">
                        <a href="interfaces/AccessTokenErrorResponse.html" data-type="entity-link">AccessTokenErrorResponse</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/AuthStateModel.html" data-type="entity-link">AuthStateModel</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/AuthorizationErrorResponse.html" data-type="entity-link">AuthorizationErrorResponse</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Crumb.html" data-type="entity-link">Crumb</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/DialogFlowTokenInterface.html" data-type="entity-link">DialogFlowTokenInterface</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/DocsSiteTheme.html" data-type="entity-link">DocsSiteTheme</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Element.html" data-type="entity-link">Element</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/EmailTemplate.html" data-type="entity-link">EmailTemplate</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Filter.html" data-type="entity-link">Filter</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ICrudService.html" data-type="entity-link">ICrudService</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IOptions.html" data-type="entity-link">IOptions</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IPoint.html" data-type="entity-link">IPoint</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IRectangle.html" data-type="entity-link">IRectangle</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IResizeEvent.html" data-type="entity-link">IResizeEvent</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/IResizeState.html" data-type="entity-link">IResizeState</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ISize.html" data-type="entity-link">ISize</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ISocket.html" data-type="entity-link">ISocket</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Id.html" data-type="entity-link">Id</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Info.html" data-type="entity-link">Info</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/JsonDiffNode.html" data-type="entity-link">JsonDiffNode</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/JwtToken.html" data-type="entity-link">JwtToken</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Location.html" data-type="entity-link">Location</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MatchExp.html" data-type="entity-link">MatchExp</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MenuItem.html" data-type="entity-link">MenuItem</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/MenuStateModel.html" data-type="entity-link">MenuStateModel</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Name.html" data-type="entity-link">Name</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/NgxsWebsocketPluginOptions.html" data-type="entity-link">NgxsWebsocketPluginOptions</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ObjectLiteral.html" data-type="entity-link">ObjectLiteral</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/Picture.html" data-type="entity-link">Picture</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/PreferenceStateModel.html" data-type="entity-link">PreferenceStateModel</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/QueryParams.html" data-type="entity-link">QueryParams</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/RandomAccount.html" data-type="entity-link">RandomAccount</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/RealtimeUsersWidgetData.html" data-type="entity-link">RealtimeUsersWidgetData</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/RealtimeUsersWidgetPages.html" data-type="entity-link">RealtimeUsersWidgetPages</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/RecentSalesWidgetOptions.html" data-type="entity-link">RecentSalesWidgetOptions</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/ResponseObject.html" data-type="entity-link">ResponseObject</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/RouterStateData.html" data-type="entity-link">RouterStateData</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/RxSocketioSubjectConfig.html" data-type="entity-link">RxSocketioSubjectConfig</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/SalesSummaryWidgetOptions.html" data-type="entity-link">SalesSummaryWidgetOptions</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/SocketIOEvent.html" data-type="entity-link">SocketIOEvent</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/State.html" data-type="entity-link">State</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/SynthesisVoice.html" data-type="entity-link">SynthesisVoice</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TreeConfig.html" data-type="entity-link">TreeConfig</a>
                    </li>
                    <li class="link">
                        <a href="interfaces/TreeNode.html" data-type="entity-link">TreeNode</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"' }>
                <span class="icon ion-ios-cube"></span>
                <span>Miscellaneous</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                    <li class="link">
                      <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                    </li>
                    <li class="link">
                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
        </li>
        <li class="divider"></li>
        <li class="copyright">
                Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.svg" class="img-responsive" data-type="compodoc-logo">
                </a>
        </li>
    </ul>
</nav>`);
        this.innerHTML = tp.strings;
    }
});
