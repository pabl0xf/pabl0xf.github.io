/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Text blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
"use strict";

goog.provide("Blockly.Blocks.zumi"); // Deprecated
goog.provide("Blockly.Constants.Zumi");

goog.require("Blockly.Blocks");
goog.require("Blockly");

/**
 * Common HSV hue for all blocks in this category.
 * Should be the same as Blockly.Msg.TEXTS_HUE
 * @readonly
 */
Blockly.Constants.Zumi.HUE = "#3353da";
Blockly.Constants.Zumi.HUE_Orange2 = "#EC5B29";
Blockly.Constants.Zumi.HUE_Orange = "#f29327";
Blockly.Constants.Zumi.HUE_Violet = "#b358d7";
Blockly.Constants.Zumi.HUE_Rose = "#ee42ae";
Blockly.Constants.Zumi.HUE_Cian = "#3399e4";
Blockly.Constants.Zumi.HUE_flight_variables = "#33DAD8";
Blockly.Constants.Zumi.HUE_keyboard_input = "#CACACA";
Blockly.Constants.Zumi.HUE_timming = "#9B9B9B";
/** @deprecated Use Blockly.Constants.Text.HUE */
Blockly.Blocks.zumi.HUE = Blockly.Constants.Zumi.HUE;

Blockly.Blocks["zumi_turn_degree_junior"] = {
     init: function() {
       this.jsonInit({
         message0: "turn_degree(%1º)",
         args0: [
           {
             type: "field_number",
             name: "NUM0",
             value: 0,
             min: -180,
             max: 180
           },
         ],
         previousStatement: null,
         nextStatement: null,
         colour: Blockly.Constants.Zumi.HUE,
         tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
         helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
       });
     }
  };

  Blockly.Blocks["zumi_go_direction_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "go(%1)",
      args0: [
        {
          type: "field_dropdown",
          name: "TYPE",
          options: [
            ["forward", "Direction.FORWARD"],
            ["backward", "Direction.BACKWARD"],
            ["left", "Direction.LEFT"],
            ["right", "Direction.RIGHT"]
          ]
        }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Constants.Zumi.HUE,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_get_distance_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "get_distance()",
      output: "Number",
      colour: Blockly.Constants.Zumi.HUE_Orange,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_play_sound_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "play_sound(%1)",
      args0: [
        {
          type: "field_dropdown",
          name: "SOUND",
          options: [
            ["happy", "Sound.HAPPY"],
            ["sad", "Sound.SAD"],
            ["honk", "Sound.HONK"]
          ]
        }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Constants.Zumi.HUE,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_personality_act_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "act(%1)",
      args0: [
        {
          type: "field_dropdown",
          name: "EMOTION",
          options: [
            ["happy", "Emotion.HAPPY"],
            ["sad", "Sound.SAD"],
            ["scared", "Sound.SCARED"],
            ["excited", "Sound.EXCITED"]
          ]
        }
      ],
      previousStatement: null,
      nextStatement: null,
      colour: Blockly.Constants.Zumi.HUE,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_face_detected_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "face_detected()",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Blocks.codrone.HUE,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_smile_detected_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "smile_detected()",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Blocks.codrone.HUE,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};

Blockly.Blocks["zumi_collect_smile_junior"] = {
  init: function() {
    this.jsonInit({
      message0: "collect_smile()",
      previousStatement: null,
      nextStatement: null,
      tooltip: Blockly.Msg.TEXT_JOIN_TOOLTIP,
      colour: Blockly.Blocks.codrone.HUE,
      helpUrl: Blockly.Msg.TEXT_JOIN_HELPURL
    });
  }
};
