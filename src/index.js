// Copyright (c) 2021 MintJams Inc. Licensed under MIT License.

import Vue from 'vue';

const version = '1.0.0';

const compatible = (/^2\./).test(Vue.version);
if (!compatible) {
	Vue.util.warn('VueResizeObserver ' + version + ' only supports Vue 2.x, and does not support Vue ' + Vue.version);
}

const VueResizeObserver = {
	install(Vue/* , options */) {
		let observers = {};

		Vue.directive('resizeobserver', {
			bind(el, binding, vnode) {
				if (!vnode.key) {
					console.warn('Required attribute "v-bind:key" does not specified: ' + el.outerHtml);
					return;
				}

				if (!binding.value || !(typeof binding.value === 'function')) {
					console.warn('Callback function does not specified: ' + el.outerHtml);
					return;
				}

				let observer = new ResizeObserver(binding.value);
				observers[vnode.key] = observer;
				observer.observe(el);
			},
			unbind(el, binding, vnode) {
				if (!vnode.key) {
					return;
				}

				let observer = observers[vnode.key];
				if (observer) {
					observer.disconnect();
				}
				delete observers[vnode.key];
			},
		});
	},
};

export default VueResizeObserver;
