'use strict';
'require baseclass';
'require uci';
'require fs';
'require rpc';
'require request';

const callRCInit = rpc.declare({
    object: 'rc',
    method: 'init',
    params: ['name', 'action'],
    expect: { '': {} }
});

const callDormnetBuildInfo = rpc.declare({
    object: 'luci.dormnet',
    method: 'build_info',
    expect: { '': {} }
});

const callDormnetStatus = rpc.declare({
    object: 'luci.dormnet',
    method: 'status',
    expect: { '': {} }
});

// noinspection JSAnnotator
return baseclass.extend({
    buildInfo: function () {
        return callDormnetBuildInfo();
    },
    status: function () {
        return callDormnetStatus();
    },
    restart: function () {
        return callRCInit('dormnet', 'reload');
    }
});
