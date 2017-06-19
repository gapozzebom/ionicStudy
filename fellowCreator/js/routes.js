angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.eventsListTab', {
    url: '/events',
    views: {
      'tab3': {
        templateUrl: 'templates/eventsListTab.html',
        controller: 'eventsListTabCtrl'
      }
    }
  })

  .state('tabsController.suggesstsListTab', {
    url: '/suggests',
    views: {
      'tab1': {
        templateUrl: 'templates/suggesstsListTab.html',
        controller: 'suggesstsListTabCtrl'
      }
    }
  })

  .state('tabsController.chatListTab', {
    url: '/chat',
    views: {
      'tab2': {
        templateUrl: 'templates/chatListTab.html',
        controller: 'chatListTabCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/home',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('welcome', {
    url: '/login',
    templateUrl: 'templates/welcome.html',
    controller: 'welcomeCtrl'
  })

  .state('chatPage', {
    url: '/chat/$id',
    templateUrl: 'templates/chatPage.html',
    controller: 'chatPageCtrl'
  })

  .state('eventPeoplePage', {
    url: '/eventPeople/$id',
    templateUrl: 'templates/eventPeoplePage.html',
    controller: 'eventPeoplePageCtrl'
  })

  .state('profilePageFromEvents', {
    url: '/profile/$id?$event=$id',
    templateUrl: 'templates/profilePageFromEvents.html',
    controller: 'profilePageFromEventsCtrl'
  })

  .state('eventDetailsPage', {
    url: '/event/$id',
    templateUrl: 'templates/eventDetailsPage.html',
    controller: 'eventDetailsPageCtrl'
  })

  .state('profilePageFromChat', {
    url: '/profile/$id?$chat=$id',
    templateUrl: 'templates/profilePageFromChat.html',
    controller: 'profilePageFromChatCtrl'
  })

  .state('myProfile', {
    url: '/myprofile',
    templateUrl: 'templates/myProfile.html',
    controller: 'myProfileCtrl'
  })

  .state('settings', {
    url: '/settings',
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  })

  .state('store', {
    url: '/store',
    templateUrl: 'templates/store.html',
    controller: 'storeCtrl'
  })

$urlRouterProvider.otherwise('/login')


});