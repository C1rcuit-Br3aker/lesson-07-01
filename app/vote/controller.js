import Ember from 'ember';

export default Ember.Controller.extend({
  heroes: Ember.inject.service(`heroes`),

  voteUp(hero) {
    Ember.set(hero, `score`, parseInt(hero.score) + 1);
    this.get(`heroes`).update(hero);
  },

  voteDown(hero) {
    Ember.set(hero, `score`, parseInt(hero.score) - 1);
    this.get(`heroes`).update(hero);
  },
});
