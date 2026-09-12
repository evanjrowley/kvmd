/*****************************************************************************
#                                                                            #
#    KVMD - The main PiKVM daemon.                                           #
#                                                                            #
#    Copyright (C) 2018-2024  Maxim Devaev <mdevaev@gmail.com>               #
#                                                                            #
#    This program is free software: you can redistribute it and/or modify    #
#    it under the terms of the GNU General Public License as published by    #
#    the Free Software Foundation, either version 3 of the License, or       #
#    (at your option) any later version.                                     #
#                                                                            #
#    This program is distributed in the hope that it will be useful,         #
#    but WITHOUT ANY WARRANTY; without even the implied warranty of          #
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the           #
#    GNU General Public License for more details.                            #
#                                                                            #
#    You should have received a copy of the GNU General Public License       #
#    along with this program.  If not, see <https://www.gnu.org/licenses/>.  #
#                                                                            #
*****************************************************************************/


"use strict";


import {$, tools} from "../tools.js";


export function main() {
	__loadKvmdInfo();
}

function __loadKvmdInfo() {
	tools.httpGet("api/info", {"legacy": 0}, function(http) {
		switch (http.status) {
			case 200:
				__showKvmdInfo(JSON.parse(http.responseText).result);
				break;

			case 401:
			case 403:
				tools.currentOpen("login");
				break;

			default:
				setTimeout(__loadKvmdInfo, 1000);
				break;
		}
	});
}

function __showKvmdInfo(info) {
	let host = tools.escape((info.node || {}).host || window.location.hostname);
	let origin = tools.escape(window.location.protocol + "//" + window.location.host);
	$("help-text").innerHTML = `
		<span class="code-comment"># Verify KVMD API:</span><br>
		<span class="code-comment">$</span> curl -k ${origin}/api/info<br>
		<br>
		<span class="code-comment"># Open PiKVM docs:</span><br>
		<span class="code-comment">$</span> xdg-open https://docs.pikvm.org<br>
		<br>
		<span class="code-comment"># Current PiKVM host:</span><br>
		${host}
	`;
}
