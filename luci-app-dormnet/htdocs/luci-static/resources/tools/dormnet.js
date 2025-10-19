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

const callDormnetSupportedTargets = rpc.declare({
    object: 'luci.dormnet',
    method: 'list_target',
    expect: { '': {} }
});

const callDormnetExtraArgsAccount = rpc.declare({
    object: 'luci.dormnet',
    method: 'extra_args_account',
    params: [ 'account' ],
    expect: { '': {} }
});

const callDormnetLogs = rpc.declare({
    object: 'luci.dormnet',
    method: 'logs',
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
    supportedTargets: function () {
        return callDormnetSupportedTargets();
    },
    extraArgsAccount: function (account) {
        return callDormnetExtraArgsAccount(account);
    },
    logs: function () {
        return callDormnetLogs();
    },
    restart: function () {
        return callRCInit('dormnet', 'reload');
    }
});
