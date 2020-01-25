import angular from 'angular';

// https://stackoverflow.com/questions/28620479/using-es6-classes-as-angular-1-x-directives
// https://github.com/michaelbromley/michaelbromley.co.uk/blob/master/content/blog/2015-01-28-exploring-es6-classes-in-angularjs-1-x.md
// https://stackoverflow.com/questions/45170610/how-to-inject-into-a-directive-controller-in-es6
export class RightClickDirective {
  static get restrict() {
    return 'A';
  }

  constructor($parse) {
    this.$parse = $parse;
  }

  static directiveFactory($parse) {
    RightClickDirective.instance = new RightClickDirective($parse);
    return RightClickDirective.instance;
  }

  link($scope, $element, $attrs) {
    this.$scope = $scope;
    this.$element = $element;
    this.$attrs = $attrs;
    this.rightClick();
  }

  rightClick() {
    const fn = this.$parse(this.$attrs.rightClick);
    this.$element.bind('contextmenu', event => {
      this.$scope.$apply(() => {
        event.preventDefault();
        fn(this.$scope, { $event: event });
      });
    });
  }
}

RightClickDirective.directiveFactory.$inject = ['$parse'];
export default angular
  .module('right-click.directive', [])
  .directive('rightClick', RightClickDirective.directiveFactory).name;
