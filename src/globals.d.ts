/*
 *
 *  * City Web Map
 *  * http://www.3dcitydb.org/
 *  *
 *  * Copyright 2015 - 2021
 *  * Chair of Geoinformatics
 *  * Department of Aerospace and Geodesy
 *  * Technical University of Munich, Germany
 *  * https://www.gis.lrg.tum.de/
 *  *
 *  * Licensed under the Apache License, Version 2.0 (the "License");
 *  * you may not use this file except in compliance with the License.
 *  * You may obtain a copy of the License at
 *  *
 *  *     http://www.apache.org/licenses/LICENSE-2.0
 *  *
 *  * Unless required by applicable law or agreed to in writing, software
 *  * distributed under the License is distributed on an "AS IS" BASIS,
 *  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  * See the License for the specific language governing permissions and
 *  * limitations under the License.
 *
 */

// declare var Cesium: any;
// declare var cesiumCamera: any;
// declare var cesiumViewer: any;
//
// declare var addLayerViewModel: LayerViewModel;
//
// interface LayerViewModel {
//   url: string,
//   name: string,
//   layerDataType: string,
//   layerProxy: boolean,
//   layerClampToGround: boolean,
//   gltfVersion: string,
//   thematicDataUrl: string,
//   thematicDataSourceType: string,
//   tableType: string,
//   // googleSheetsApiKey: string,
//   // googleSheetsRanges: string,
//   // googleSheetsClientId: string,
//   cityobjectsJsonUrl: string,
//   minLodPixels: number,
//   maxLodPixels: number,
//   maxSizeOfCachedTiles: number,
//   maxCountOfVisibleTiles: number
// }

declare let addSplashWindowModel: SplashWindowModel;

interface SplashWindowModel {
  url: string;
  showOnStart: boolean;
}
