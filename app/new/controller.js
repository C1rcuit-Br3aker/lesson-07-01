import Ember from 'ember';

export default Ember.Controller.extend({
  heroes: Ember.inject.service(`heroes`),

  createRecord() {
    const hero = {
      name: this.name,
      score: 0,
    };

    this.get(`heroes`).newHero(hero).then(() => {
      this.clearForm();
      this.transitionToRoute(`index`);
    });
  },
  clearForm() {
    this.set(`name`, ``);
  },
});
