define(['jquery', 'knockout', './router', './viewModels/sidebarViewModel'], function ($, ko, router, sidebarVM) {
  
  ko.components.register('channel', { require: 'views/channel/index' });
  ko.components.register('channelList', { require: 'views/channelList/index' });
  ko.applyBindings({ route: router.currentRoute }, document.getElementById('AppHolder'));
  
  console.log(sidebarVM);



  ko.applyBindings(new sidebarVM(), document.getElementById('sidebar'));
});