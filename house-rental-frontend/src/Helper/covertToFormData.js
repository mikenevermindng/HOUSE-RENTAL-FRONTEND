// takes a {} object and returns a FormData object
var objectToFormData = function(obj, form, namespace) {
	var fd = form || new FormData();
	var formKey;

	for (var property in obj) {
		if (obj.hasOwnProperty(property)) {
			if (namespace) {
				formKey = namespace + '[' + property + ']';
			} else {
				formKey = property;
			}

			// if the property is an object, but not a File,
			// use recursivity.
			if (typeof obj[property] === 'object' && !(obj[property] instanceof File)) {
				objectToFormData(obj[property], fd, property);
			} else {
				// if it's a string or a File object
				fd.append(formKey, obj[property]);
			}
		}
	}

	return fd;
};

// usage example
var z = objectToFormData({
	obj: {
		prop: 'property value'
	},
	arr: [ 'one', 'two', 'three', new File([ '' ], '') ],
	file: new File([ '' ], '')
});

var xhr = new XMLHttpRequest();
xhr.open('POST', '/', true);
xhr.send(z);

// usage for Angular.js

// wrap object to formdata method,
// to use it as a transform with angular's http.
var formDataTransform = function(data, headersGetter) {
	// we need to set Content-Type to undefined,
	// to make the browser set it to multipart/form-data
	// and fill in the correct *boundary*.
	// setting Content-Type to multipart/form-data manually
	// will fail to fill in the boundary parameter of the request.
	headersGetter()['Content-Type'] = undefined;

	return objectToFormData(data);
};

export {
    objectToFormData
}
