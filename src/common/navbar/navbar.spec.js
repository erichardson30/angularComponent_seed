import './index';  // import the module under test

describe('Navbar Component', () => {

  beforeEach(window.module('navbar')); 

  let $componentController;
  beforeEach(window.inject((_$componentController_) => {
    $componentController = _$componentController_;
  }));

  it('has the App brand', () => {
    let component = $componentController('navbar', null, {});
    expect(component)
    expect(component.brand).toEqual('App');
  });

  it('has 2 menu items', () => {
    let component = $componentController('navbar', null, {});
    expect(component.items.length).toEqual(2);
  });


  describe('#onItemClicked', () => {
    it('selects the clicked item', () => {
      let component = $componentController('navbar', null, {});

      var itemToClick = component.items[2];
      expect(itemToClick.isActive).toBe(false);

      component.onItemClicked(itemToClick);
      expect(itemToClick.isActive).toBe(true);
    });
  });

});
