// import React, { useState } from "react";
// import { useFormContext } from "react-hook-form";
// import { View, Text, TextInput, TouchableOpacity } from "react-native";
// import DropDownPicker from "react-native-dropdown-picker";
// import languages from "@/data/languages.json"; // Already structured correctly
// import softSkills from "@/data/softSkills.json"; // Add a softSkills.json file

// const Step5SkillsLanguages = () => {
//   const {
//     register,
//     setValue,
//     watch,
//     formState: { errors },
//   } = useFormContext();

//   const storedLanguages = watch("languages") || [];
//   const storedSoftSkills = watch("softSkills") || [];

//   const [openLanguages, setOpenLanguages] = useState(false);
//   const [openSoftSkills, setOpenSoftSkills] = useState(false);

//   const [selectedLanguages, setSelectedLanguages] = useState(storedLanguages);
//   const [selectedSoftSkills, setSelectedSoftSkills] = useState(
//     storedSoftSkills || []
//   );

//   // Function to handle removing a language
//   const handleRemoveLanguage = (language) => {
//     const updatedLanguages = selectedLanguages.filter(
//       (lang) => lang !== language
//     );
//     setSelectedLanguages(updatedLanguages);
//     setValue("languages", updatedLanguages, { shouldValidate: true });
//   };

//   // Function to handle removing a soft skill
//   const handleRemoveSoftSkill = (skill) => {
//     const updatedSoftSkills = selectedSoftSkills.filter((s) => s !== skill);
//     setSelectedSoftSkills(updatedSoftSkills);
//     setValue("softSkills", updatedSoftSkills, { shouldValidate: true });
//   };

//   return (
//     <View className="mb-5">
//       <Text className="text-2xl font-bold dark:text-white mb-4">
//         Skills & Languages
//       </Text>

//       <View className="p-3 border border-gray-300 rounded-lg">
//         {/* Technical Skills */}
//         <View className="mb-5">
//           <Text className="text-base font-medium dark:text-white mb-2">
//             Technical Skills
//           </Text>
//           <TextInput
//             className={`border ${
//               errors.technicalSkills ? "border-red-500" : "border-gray-300"
//             } rounded-lg p-4 dark:text-white placeholder:text-gray-500`}
//             placeholder="Enter technical skills (comma-separated)"
//             onChangeText={(text) =>
//               setValue("technicalSkills", text, { shouldValidate: true })
//             }
//             value={watch("technicalSkills")}
//             {...register("technicalSkills", {
//               required: "Technical Skills are required",
//             })}
//           />
//           {errors.technicalSkills && (
//             <Text className="text-red-500 text-sm mt-1">
//               {errors.technicalSkills.message?.toString()}
//             </Text>
//           )}
//         </View>

//         {/* Soft Skills */}
//         <View className="mb-20">
//           <Text className="text-base font-medium dark:text-white mb-2">
//             Soft Skills
//           </Text>

//           {/* Dropdown for selecting soft skills */}
//           <DropDownPicker
//             style={{
//               zIndex: openSoftSkills ? 2000 : 1000,
//               position: "relative",
//             }}
//             open={openSoftSkills}
//             setOpen={setOpenSoftSkills}
//             multiple={true}
//             value={selectedSoftSkills}
//             items={softSkills}
//             setValue={(callback) => {
//               setSelectedSoftSkills((prev) => {
//                 const newSelection =
//                   typeof callback === "function" ? callback(prev) : callback;
//                 setValue("softSkills", newSelection, {
//                   shouldValidate: true,
//                 });
//                 return newSelection;
//               });
//             }}
//             placeholder="Select soft skills..."
//             mode="SIMPLE" // Use SIMPLE mode
//             maxHeight={210}
//             // dropDownDirection="TOP"
//             listMode="SCROLLVIEW"
//           />
//           {/* style={{ zIndex: openLanguages ? 1001 : 1000 }} */}
//           {/* Render selected soft skills as removable badges */}
//           <View
//             style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 10 }}
//           >
//             {selectedSoftSkills.map((skill) => {
//               const skillLabel = softSkills.find(
//                 (s) => s.value === skill
//               )?.label;
//               return (
//                 <TouchableOpacity
//                   key={skill}
//                   onPress={() => handleRemoveSoftSkill(skill)}
//                   className="p-3 m-2 flex-row items-center bg-[#a98dd1] rounded-lg"
//                 >
//                   <Text style={{ color: "white", marginRight: 4 }}>
//                     {skillLabel}
//                   </Text>
//                   <Text style={{ color: "white" }}>×</Text>
//                 </TouchableOpacity>
//               );
//             })}
//           </View>

//           {errors.softSkills && (
//             <Text className="text-red-500 text-sm mt-1">
//               {errors.softSkills.message?.toString()}
//             </Text>
//           )}
//         </View>

//         {/* Programming Languages */}
//         <View className="mb-5">
//           <Text className="text-base font-medium dark:text-white mb-2">
//             Programming Languages
//           </Text>

//           {/* Dropdown for selecting programming languages */}
//           <DropDownPicker
//             open={openLanguages}
//             setOpen={setOpenLanguages}
//             multiple={true}
//             value={selectedLanguages}
//             items={languages}
//             setValue={(callback) => {
//               setSelectedLanguages((prev) => {
//                 const newSelection =
//                   typeof callback === "function" ? callback(prev) : callback;
//                 setValue("languages", newSelection, { shouldValidate: true });
//                 return newSelection;
//               });
//             }}
//             placeholder="Select programming languages..."
//             mode="SIMPLE" // Use SIMPLE mode
//             maxHeight={300}
//             dropDownDirection="TOP"
//             listMode="SCROLLVIEW"
//           />

//           {/* Render selected languages as removable badges */}
//           <View
//             style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 10 }}
//           >
//             {selectedLanguages.map((lang) => {
//               const languageLabel = languages.find(
//                 (l) => l.value === lang
//               )?.label;
//               return (
//                 <TouchableOpacity
//                   key={lang}
//                   onPress={() => handleRemoveLanguage(lang)}
//                   className="p-3 m-2 flex-row items-center bg-[#a98dd1] rounded-lg"
//                 >
//                   <Text style={{ color: "white", marginRight: 4 }}>
//                     {languageLabel}
//                   </Text>
//                   <Text style={{ color: "white" }}>×</Text>
//                 </TouchableOpacity>
//               );
//             })}
//           </View>

//           {errors.languages && (
//             <Text className="text-red-500 text-sm mt-1">
//               {errors.languages.message?.toString()}
//             </Text>
//           )}
//         </View>
//       </View>
//     </View>
//   );
// };

// export default Step5SkillsLanguages;
