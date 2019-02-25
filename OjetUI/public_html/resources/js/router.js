
require(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout',
         'ojs/ojtoolbar', 'ojs/ojbutton', 'ojs/ojrouter'],
function(oj, ko, $)
{
  // Change the router base URL value. This is needed when using the path URL
  // adapter because the default base URL value of '/' doesn't match this
  // application path. Use the value set on the <base> tag of this page.
  var base = document.getElementsByTagName('base')[0].getAttribute('href');
  oj.Router.defaults['baseUrl'] = base;

  // Retrieve the router static instance and configure the states
  var router = oj.Router.rootInstance;
  router.configure(
  {
    'pref':  { label: 'Preface',   value: 'This is the Preface.',
               isDefault: true },
    'chap1': { label: 'Chapter 1', value: 'This is Chapter 1.' },
    'chap2': { label: 'Chapter 2', value: 'This is Chapter 2.' },
    'chap3': { label: 'Chapter 3', value: 'This is Chapter 3.' }
  });

  var viewModel =
  {
    router: router
  };

  $(function()
  {
    ko.applyBindings(viewModel,
                     document.getElementById('routing-container'));
    oj.Router.sync();
  });
});
