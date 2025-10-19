'use strict';
'require view';
'require ui';
'require poll';
'require tools.dormnet as dormnet';

// noinspection JSAnnotator
return view.extend({
    load: function () {
        return Promise.all([
            dormnet.logs(),
        ]);
    },
    render: function(data) {
        const logs = data[0];

        let m, s, o;

        m = new ui.Textarea(logs, {
            readonly: true,
            monospace: true,
            rows: 35,
        })

        poll.add(function () {
            return L.resolveDefault(dormnet.logs()).then(function (logs) {
                m.setValue(logs.data.join('\n'))
            });
        });

        return m.render();
    }
});
