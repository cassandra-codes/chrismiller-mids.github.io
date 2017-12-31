angular.module('sidebar').controller('sidebarCtrl', function(gridService) {
	var vm = this;

	vm.starveValue = 2;
	vm.overpopulateValue = 3;
	vm.reproduceValue = 3;
	vm.wrap = true;

	vm.running = false;
	vm.runText = "Start";

	vm.ratio = 25;

	vm.neighbors = [];

	for (var i = 0; i < 9; i++) {
		vm.neighbors.push({"birth": false, "survive": false});
	}

	vm.neighbors[2]["survive"] = true
	vm.neighbors[3]["survive"] = true
	vm.neighbors[3]["birth"] = true

	vm.play = function() {
		vm.running = !vm.running;
		if (vm.running) {
			vm.runText = "Stop";
		}
			
		else {
			vm.runText = "Start";
		}

		gridService.play();

	}

	vm.random = function() {
		gridService.init();
	}

	vm.clear = function() {
		gridService.clear();
	}

	vm.edit = function() {
		gridService.edit()
	}

	vm.starve = function() {
		gridService.setStarve(vm.starveValue);
	}

	vm.overpopulate = function() {
		gridService.setOverpopulate(vm.overpopulateValue);
	}

	vm.reproduce = function() {
		gridService.setReproduce(vm.reproduceValue);
	}

	vm.setWrap = function() {
		gridService.setWrap(vm.wrap);
	}

	vm.setRatio = function() {
		gridService.setRatio(vm.ratio * 0.01);
		gridService.init();
	}

	vm.updateRules = function() {
		gridService.setRules(vm.neighbors);
	}

});