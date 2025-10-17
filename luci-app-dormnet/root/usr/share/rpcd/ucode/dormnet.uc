#!/usr/bin/env ucode

'use strict';

import { popen } from 'fs';

function json_process(command) {
    let profile = {
        "success": false,
        "message": "failed to open process in ucode",
    };
    const process = popen(command);
    if (process) {
        profile = json(process);
        process.close();
    }
    return profile;
}

const methods = {
    build_info: {
        call: function() {
            const command = `dormnet -build-info`;
            return json_process(command);
        }
    },

    extra_args: {
        args: { target: 'target' },
        call: function(req) {
            const target = req.args?.target ?? "";
            const command = `dormnet -extra-args=${target}`;
            return json_process(command);
        }
    },

    list_target: {
        args: { target: 'target' },
        call: function() {
            const command = `dormnet -list-targets`;
            return json_process(command);
        }
    },

    status: {
        call: function() {
            const command = `dormnet -status`;
            return json_process(command);
        }
    },

    restart: {
        call: function () {
            const command = `/etc/init.d/dormnet restart`;
            return json_process(command);
        }
    }
};

return { 'luci.dormnet': methods };
