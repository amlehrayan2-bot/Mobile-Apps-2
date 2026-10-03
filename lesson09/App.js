import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


const Card=(props)=>{
  const[count,setCount]=useState(props.initial_value);
  //const[data,setData]=useState(props.Data);
  const[backColor,setBack]=useState(['#008080', '#ffffff']);
  const[Color,setColor]=useState("#222");
  const handleShare = async (text) => {
    try {
      await Share.share({ message: text });
    } catch (error) {
      console.log(error);
    }
  };

  const handlePress = () => {
    if (count > 1) {
      setCount(count - 1);
    } 
    else if(count===1){
      setCount(count-1);
      setBack(['#006666','#008080']); // تغيير اللون عند الانتهاء
      setColor('white');



    }
    
    else {
      
      setBack(['#006666','#008080']);
      setColor('white');
    }
  };

  const handlePress1=()=>{
    setCount(props.initial_value);
    setBack(['#008080', '#ffffff']);
    setColor("#222");






  }




  return <View style={styles.card}>
          <View>
            <Text  style={[styles.text,styles.content]}>{props.content}</Text>
            <Text style={styles.text}>{props.content1}</Text> 
            <Text style={[styles.text,styles.content2 ]}>{props.content2}</Text> 
          </View>
          

          <Pressable onPress={handlePress}>
          <LinearGradient colors={backColor} style={styles.button}> 
            <View style={styles.viewchild1}>
              <Text style={[styles.text,{color:Color}]}>{props.number1}</Text>
              <Pressable style={styles.iconButton} onPress={() => handleShare(props.content1)}>
                      <Ionicons name="share-social" size={24} color={Color} />
              </Pressable>

            </View>
            <View style={styles.viewchild2}><Text style={[styles.text,{color:Color}]}>{count}</Text></View>
            <View style={styles.viewchild3}>
            <Pressable style={styles.retryButton} onPress={handlePress1}>
               <Ionicons name="refresh" size={20}   color= {Color} />
            </Pressable>
              <Text style={[styles.text,{color:Color}]}>{props.number2}</Text>
            </View>

          </LinearGradient>
          </Pressable>
             






    </View>



}
 





export default function App() {
  let card=[
    {
      content:`اعوذ بالله من الشيطان الرجيم"`,
      content1:`    
اللَّهُ لاَ إِلَـهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّمَّا عَلِمَ بِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ
(آية الكرسي ـ البقرة: 255)`,
      content2: `من قالها حين يصبح أجير من الجن حتى يمسى، ومن قالها حين يمسى أجير من الجن حتى يصبح.`,
      number1:1,
      number2:1,
      initial_value:1

    },
    {
      content:`"بسم الله الرحمن الرحيم"`,
    content1:`   
قُلْ هُوَ اللَّهُ أَحَدٌ، اللَّهُ الصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ`,
      content2:`من قالها حين يصبح وحين يمسى كفته من كل شيء (الإخلاص والمعوذتين).`,
      number1:3,
      number2:2,
      initial_value:3

    },

    {
      content:`"بسم اللَّهِ الرَّحْمَنِ الرَّحِيمِ"`,
      content1:` 
قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ، مِن شَرِّ مَا خَلَقَ، وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ، وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ، وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ.`,
      content2:"",
      number1:3,
      number2:3,
      initial_value:3,

    },
    {
      content:`" بسم اللَّهِ الرَّحْمَنِ الرَّحِيمِ" `,
      content1:`   
قُلْ أَعُوذُ بِرَبِّ النَّاسِ * مَلِكِ النَّاسِ * إِلَهِ النَّاسِ * مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ * الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ * مِنَ الْجِنَّةِ وَالنَّاسِ`,
      content2:"",
      number1:3,
      number2:4,
      initial_value:3

    },
    {
      content:"",
      content1:`أصبحنا وأصبح الملك لله والحمد لله لا إله إلا الله وحده لا شريك له له الملك وله الحمد وهو على كل شيء قدير ربِّ أسألك خير ما في هذا اليوم وخير ما بعده وأعوذ بك من شر ما في هذا اليوم وشر ما بعده ربِّ أعوذ بك من الكسل وسوء الكِبَر ربِّ أعوذ بك من عذاب في النار وعذاب في القبر`,
      content2:"",
      number1:1,
      number2:5,
      initial_value:1

    },
    {
      content:"",

      content1:`اللهم أنت ربي لا إله إلا أنت خلقتني وأنا عبدك وأنا على عهدك ووعدك ما استطعت أعوذ بك من شر ما صنعت أبوء لك بنعمتك عليّ وأبوء بذنبي فاغفر لي فإنه لا يغفر الذنوب إلا أنت`,
      content2:"من قالها موقناً بها حين يمسي ومات من ليلته دخل الجنة وكذلك حين يصبح",
      number1:1,
      number2:6,
      initial_value:1

    },
    {
      content:"",

      content1:`رضيت بالله رباً وبالاسلامِ ديناً وبمحمدٍ صلى الله عليه وسلم نبياً`,
      content2:"من قالها حين يصبح وحين يمسي كان حقاً على الله أن يرضيه يوم القيامة",
      number1:3,
      number2:7,
      initial_value:3

    },
    {
      content:"",

      content1:`اللهم إني أصبحت أشهدك وأشهد حملة عرشك وملائكتك وجميع خلقك أنك أنت الله لا إله إلا أنت وحدك لا شريك لك وأن محمدًا عبدك ورسولك (4 مرات)`,
      content2:"من قالها أعتقه الله من النار",
      number1:4,
      number2:8,
      initial_value:4

    },
    {
      content:"",

      content1:`اللهم ما أصبح بي من نعمة أو بأحدٍ من خلقك فمنك وحدك لا شريك لك فلك الحمد ولك الشكر`,
      content2:"من قالها حين يصبح أدى شكر يومه",
      number1:1,
      number2:9,
      initial_value:1

    },
    {
      content:"",

      content1:`حسبي الله لا إله إلا هو عليه توكلت وهو رب العرش العظيم (7 مرات)`,
      content2:"من قالها كفاه الله ما أهمه من أمر الدنيا والاخرة",
      number1:7,
      number2:10,
      initial_value:7

    },
    {
      content:"",

      content1:`بسم الله الذي لا يَضُر مع اسمه شيءٌ في الارض ِ ولا في السماء وهو السميع العليم`,
      content2:"لم يضره من الله شيء",
      number1:3,
      number2:11,
      initial_value:3

    },
    {
      content:"",

      content1:`اللَهم بِكَ أصبحنا وبك أمسينا وبك نحيا وبك نموت واليك النشور`,
      content2:"",
      number1:1,
      number2:12,
      initial_value:1

    },
    {
      content:"",

      content1:`أصبحنا على فطرة الإسلام وعلى كلمة الإخلاص وعلى دين نبينا محمد ﷺ وعلى ملة أبينا إبراهيم حنيفًا مسلمًا وما كان من المشركين`,
      content2:"",
      number1:1,
      number2:13,
      initial_value:1

    },
    {
      content:"",

      content1: `سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ، عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ.`,
      content2:"",
      number1:3,
      number2:14,
      initial_value:3

    },
    {
      content:"",

      content1:`"اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لَا إِلَهَ إِلَّا أَنْتَ"،`,
      content2:"",
      number1:3,
      number2:15,
      initial_value:3

    },
    {
      content:"",

      content1:`اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ وَأَعُوذُ بِكَ مِنْ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ وَأَعُوذُ بِكَ مِنْ فِتَنِ الْمَحْيَا وَالْمَمَاتِ`,
      content2:"",
      number1:3,
      number2:16,
      initial_value:3

    },
    {
      content:"",

      content1:`"اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدِّينِ وَالدُّنْيَا وَالْآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي جَسَدِي وَرِزْقِي وَأَهْلِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ وَمِنْ خَلْفِي وَعَنْ يَمِينِي وَعَنْ شِمَالِي وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي"`,
      content2:"",
      number1:1,
      number2:17,
      initial_value:1

    },
    {
      content:"",

      content1:`يَا حَيُّ يَا قَيُّومُ، بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ وَلا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ`,
      content2:"",
      number1:3,
      number2:18,
      initial_value:3

    },
    {
      content:"",

      content1:`اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا الْيَوْمِ، فَتْحَهُ، وَنَصْرَهُ، وَنُورَهُ، وَبَرَكَتَهُ، وَهُدَاهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ هَذَا الْيَوْمِ، وَشَرِّ مَا فِيهِ، وَشَرِّ مَا بَعْدَهُ" `,
      content2:"",
      number1:1,
      number2:19,
      initial_value:1

    },
    {
      content:"",

      content1:`اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ، فَاطِرَ السَّمَاوَاتِ وَالْأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي وَمِنْ شَرِّ كُلِّ دَابَّةٍ أَنْتَ آخِذٌ بِنَاصِيَتِهَا، إِنَّ رَبِّي عَلَى صِرَاطٍ مُسْتَقِيمٍ"`,
      content2:"",
      number1:1,
      number2:20,
      initial_value:1

    },
    {
      content:"",

      content1:`أعوذ بكلمات الله التامات من شر ما خلق (3 مرات)`,
      content2:"",
      number1:3,
      number2:21,
      initial_value:3

    },
    {
      content:"",

      content1:`اللهم صلِّ وسلم على نبينا محمد (عشر مرات أو أكثر)`,
      content2:"من صلى علي حين يصبح وحين يمسي ادركته شفاعتي يوم القيامة",
      number1:10,
      number2:22,
      initial_value:10

    },
    {
      content:"",

      content1:`"اللَّهُمَّ إِنَّا نَعُوذُ بِكَ أَنْ نُشْرِكَ بِكَ شَيْئًا وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُ"`,
      content2:"",
      number1:3,
      number2:23,
      initial_value:3

    },
    {
      content:"",

      content1:`"اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنَ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنَ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ وَقَهْرِ الرِّجَالِ"`,
      content2:"",
      number1:3,
      number2:24,
      initial_value:3

    },
    {
      content:"",

      content1:`"أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ، الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ"`,
      content2:"",
      number1:3,
      number2:25,
      initial_value:3

    },
    {
      content:"",

      content1:`"يَا رَبِّ لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ وَلِعَظِيمِ سُلْطَانِكَ"`,
      content2:"",
      number1:3,
      number2:26,
      initial_value:3

    },
    {
      content:"",

      content1:`"اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلاً مُتَقَبَّلًا"`,
      content2:"",
      number1:1,
      number2:27,
      initial_value:1

    },
    {
      content:"",

      content1:`"اللَّهُمَّ أَنْتَ رَبِّي لا إِلَهَ إِلَّا أَنْتَ، عَلَيْكَ تَوَكَّلْتُ، وَأَنْتَ رَبُّ العَرْشِ الْعَظِيمِ، مَا شَاءَ اللَّهُ كَانَ وَمَا لَمْ يَشَأْ لَمْ يَكُنْ، وَلا حَوْلَ وَلا قُوَّةَ إِلَّا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ، أَعْلَمُ أَنَّ اللَّهَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّي وَمَالِكِي وَمَوْلَايَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي وَمِنْ شَرِّ كُلِّ دَابَّةٍ أَنْتَ آخِذٌ بِنَاصِيَتِهَا، إِنَّ رَبِّي عَلَى صِرَاطٍ مُسْتَقِيمٍ."`,
      content2:"ذكر طيب",
      number1:1,
      number2:28,
      initial_value:1

    },
    {
      content:"",

      content1:`لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.`,
      content2:"كانت له عدل عشر رقاب وكتبت له مئة حسنة ومحيت عنه مئة سيئة وكانت له حرزا من الشيطان",
      number1:100,
      number2:29,
      initial_value:100

    },
    {
      content:"",

      content1:`سبحان الله وبجمده`,
      content2:"حطت خطاياه وان كانت مثل زبد البحر و لم يأت احد يوم القيامة بأفضل مما جاء به الا اجد قال مثل ما قال او زاد عليه",
      number1:100,
      number2:30,
      initial_value:100

    },
    {
      content:"",

      content1:`"أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ"`,
      content2:"مائة حسنة ومحيت عنه مائة سيئة وكانت له حرزا من الشيطان حتى يمسي",
      number1:100,
      number2:31,
      initial_value:100

    }

  ];
  return <View style={styles.container}>
    <View><Text style={{color:"white", fontSize:40,fontWeight:"500", textAlign:"center"}}>أذكار الصباح</Text></View>
    <ScrollView>
    {card.map((obj)=><Card  content={ obj.content} content1={obj.content1} content2={obj.content2} number1={obj.number1} number2={obj.number2} initial_value={obj.initial_value}/>)}
    </ScrollView>


     
    </View>
  ;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008080',

    
  },
  card:{
    backgroundColor:"white",
    flexDirection:"column",
    borderRadius:20,
    margin:10,
    padding:10,
    fontSize:20,
    fontWeight:"400"






  },
  retryButton: {
    padding: 10,

  },
  button:{
    flex:1,
    flexDirection:"column",
    backgroundColor:'#008080',
    padding:5,
    borderRadius:20,
    marginTop:30





  },
  viewchild1:{
    
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"flex-start"



  },
  viewchild2:{
  
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"

  },
  viewchild3:{
    
  flexDirection:"row",
  justifyContent:"space-between",
  alignItems:"flex-end"

  },
  text:{
    
      fontSize: 18,          // حجم مريح للقراءة
      lineHeight: 28,        // يضيف فراغ بين الأسطر
      color: '#222',         // لون غامق مريح
      textAlign: 'right',    // للنص العربي
      fontFamily: 'sans-serif',
      fontWeight:"bold"
    
  },
  content2:{
    color:"#cc0066"
  },
  content:{
    color:"#FFB74D"
  
  
    
  }

  
  
});
