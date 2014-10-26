$(document).ready(function() {
  getHolidays();
});

function getHolidays() {
  for (var i = 0; i < data.length; i++) {
    if (new Date(data[i].date) == new Date())
      $('#yay').append(
        '<div class="4u">' +
          '<section class="box">' +
            '<a href="#" class="image featured"><img src="" /></a>' +
            '<header>' +
              '<h3>' + data[i].name + '</h3>' +
            '</header>' +
            '<p>' + data[i].desc + '</p>' +
            '<footer>' +
              '<a href="' + data[i].link + '" class="button alt">' + data[i].action + '</a>' +
            '</footer>' +
          '</section>' +
        '</div>');
  }
};

var data = [
  {
    date: '2014-10-25',
    name: 'Euskai Eguna',
    desc: 'Also known as Day of the Basque Country, this holiday is celebrated in the Basque region of Spain.',
    action: 'More about Basque',
    link: 'http://en.wikipedia.org/wiki/Basque_Country_(autonomous_community)'
  },
  {
    date: '2014-10-25',
    name: 'World Pasta Day',
    desc: 'Celebrate with a big plate of your favorite pasta! We suggest gnocchi with butternut squash. Yummm.',
    action: 'Great pasta recipes',
    link: 'http://www.foodandwine.com/slideshows/best-pastas/1'
  },
  {
    date: '2014-10-25',
    name: 'Punk-for-a-Day Day',
    desc: 'Ever considered a big colorful mohawk? Today\'s the day to try a radical new hairstyle.',
    action: 'Mohawk tutorial',
    link: 'http://www.wikihow.com/Put-up-a-Mohawk-or-Liberty-Spikes'
  },
  {
    date: '2014-10-26',
    name: 'Mincemeat Day',
    desc: 'Love mince pies? Treat yourself to an extra slice today.',
    action: 'Easy mince pie recipe',
    link: 'http://www.bbcgoodfood.com/recipes/2174/unbelievably-easy-mince-pies'
  },
  {
    date: '2014-10-26',
    name: 'Mother-in-Law Day',
    desc: 'We know in-laws are a pain in the butt, but pay it forward by doing something nice for your mother-in-law today.',
    action: 'Have a funny video',
    link: 'https://www.youtube.com/watch?v=X3kUnnYtAYM'
  },
  {
    date: '2014-10-26',
    name: 'Mule Day',
    desc: 'Mules are an underappreciated animal. Recognize their importance today by square dancing. Brought to you by Tennessee.',
    action: 'Official Mule Day site',
    link: 'http://muleday.org/'
  },
  {
    date: '2014-10-26',
    name: 'Navy Day',
    desc: 'This holiday was actually replaced by Armed Forces Day (3rd Saturday in May), but the Navy League is stubborn and keeps their traditions alive.',
    action: 'Navy Days around the world',
    link: 'http://en.wikipedia.org/wiki/Navy_Day'
  },
  {
    date: '2014-10-26',
    name: 'Cranky Coworkers Day',
    desc: 'That one guy at the office who never stops complaining? Give him a hug today. He could really use it.',
    action: 'More advice on cranky coworkers',
    link: 'http://www.askamanager.org/2009/09/dealing-with-cranky-unpleasant-coworker.html'
  }
];