/**
 * @license
 * Visual Blocks Language
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
 * @fileoverview Generating Python for logic blocks.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
"use strict";

goog.provide("Blockly.Python.zumi");

goog.require("Blockly.Python");

Blockly.Python["zumi_turn_degree_junior"] = function(block) {
  var arg0 = block.getFieldValue("NUM0");
  return "Engine.turn_degree(" + arg0 + ")\n";
};

Blockly.Python["zumi_get_distance_junior"] = function(block) {
  return ["Infrared.get_distance()", Blockly.Python.ORDER_FUNCTION_CALL];
};

Blockly.Python["zumi_play_sound_junior"] = function(block) {
  var arg0 = block.getFieldValue("SOUND");
  return "Audio.play_sound(" + arg0 + ")\n";
};

Blockly.Python["zumi_personality_act_junior"] = function(block) {
  var arg0 = block.getFieldValue("EMOTION");
  return "Personality.act(" + arg0 + ");\n";
};

Blockly.Python["zumi_face_detected_junior"] = function(block) {
  return "DeepLearning.face_detected()\n";
};

Blockly.Python["zumi_smile_detected_junior"] = function(block) {
  return "DeepLearning.smile_detected()\n";
};
Blockly.Python["zumi_collect_smile_junior"] = function(block) {
  var arg0 = block.getFieldValue("EMOTION");
  return "DeepLearning.collect_smile()\n";
};
