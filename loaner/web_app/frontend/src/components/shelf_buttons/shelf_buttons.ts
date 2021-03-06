// Copyright 2018 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {Component, OnInit} from '@angular/core';

import {CONFIG} from '../../app.config';
import {UserService} from '../../services/user';

/** Component for the buttons on the shelf list table component. */
@Component({
  preserveWhitespaces: true,
  selector: 'loaner-shelf-buttons',
  styleUrls: ['shelf_buttons.scss'],
  templateUrl: 'shelf_buttons.ng.html',
})
export class ShelfButtons implements OnInit {
  canCreateShelf = false;

  constructor(private readonly userService: UserService) {}

  ngOnInit() {
    this.userService.whenUserLoaded().subscribe(user => {
      this.canCreateShelf =
          user && user.hasPermission(CONFIG.appPermissions.MODIFY_SHELF) ||
          user.superadmin;
    });
  }
}
