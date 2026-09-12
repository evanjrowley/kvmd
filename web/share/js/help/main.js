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


import {$} from "../tools.js";


export function main() {
	__showHelpText();
}

function __showHelpText() {
	let host = window.location.hostname;
	let origin = window.location.protocol + "//" + window.location.host;
	$("help-text").textContent = [
		"# Verify KVMD API:",
		`$ curl ${origin}/api/info`,
		"",
		"# Open PiKVM docs:",
		"$ xdg-open https://docs.pikvm.org",
		"",
		"# Current PiKVM host:",
		host,
	].join("\n");
}
