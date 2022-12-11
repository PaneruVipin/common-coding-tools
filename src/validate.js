// const dummyRule={
//     class:"number|min:12"
// }
// const ruleValidation={
//   number:(value,feild)=>{
//     const data={}
//   if(typeof value!="number" && value){
//       data.error={feild,message:`${feild} must be a number`}
//   }
//   return data
//   },
//   min:(value,feild,ruleValue)=>{
//     const data={}
//     // console.log(value,feild,ruleValue,value<(+ruleValue))
//      if(value<(+ruleValue)){
//        data.error={feild,message:`${feild} is to sort minimium value is ${ruleValue}`}
//      }
//      return data
//   }
// }
// const data={
//     name:"hello",
//     class:11
// }
// const validation = () => {
//   const valdt = {};
//   const errors:any=[];
//   const ruleKeys = Object.keys(dummyRule);
//   const rulesValue = ruleKeys.map((key) => dummyRule[key]);
//   ruleKeys.forEach((key, i) => {
//     const sp = rulesValue[i].split("|");
//     const newSp=sp.map((s)=>{
//    const newdata=s.split('').filter((s)=>s!=false).join('')
//    return newdata
//     })
    
//     newSp.forEach((rule) => {
//       const rules=rule.split(":")
//       // console.log(rules?.[0])
//       const vldt =(rules?.[0]=="min")
//       ?ruleValidation?.[rules?.[0]](data[key],key,rules?.[1])
//       :ruleValidation?.[rules?.[0]](data[key],key);
//       // console.log(vldt)
//       if (!vldt?.error) {
//         valdt[key] =data[key]
//       } else {
//         errors.push(vldt?.error);
//       }
//     });
//   });
//   return { valdt, errors };
// };
// const newData=validation()
// console.log("newData",newData)