import * as React from 'react';
import { StyleSheet, View, Text, ScrollView, Color } from 'react-native';
import { Image } from 'expo-image';

const AndroidSmall = () => {
  return (
 <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.androidSmall1}>
        <View
          style={[styles.androidSmall1Child, styles.jayjayjay1IconPosition]}
        />
        <Image
          style={[styles.jayjayjay1Icon, styles.jayjayjay1IconPosition]}
          contentFit="cover"
          source={require('./jay_cover.jpg')}
        />
        <Text style={styles.jayJayJoria}>JAY JAY JORIA</Text>
        <Image
          style={[styles.igLogoRemovebgPreview1Icon, styles.logoLayout]}
          contentFit="cover"
          source={require('./ig_logo.png')}
        />
        <Image
          style={styles.xLogoRemovebgPreview1Icon}
          contentFit="cover"
          source={require('./x__logo.png')}
        />
        <Image
          style={[styles.fbLogo11, styles.logoLayout]}
          contentFit="cover"
          source={require('./fb_logo.png')}
        />
        <Text style={[styles.aboutMe, styles.aboutMeTypo]}>ABOUT ME</Text>
        <Text
          style={[
            styles.collegeStudentImBachelor,
            styles.collegeStudentImBachelorPosition,
          ]}>{`College Student
I'm  Bachelor of Science in Information Technology at Global Reciprocal College. I took IT because I want to explore more things that are related to computer and I wanted to become a Web Developer and network specialist  someday.
I have been a servant of my god for more than 5 years and I mastered doing power point presentations and easy worship presentation.`}</Text>
        <Text style={[styles.otherInfo, styles.aboutMeTypo]}>OTHER INFO</Text>
        <Image
          style={[
            styles.jaycRemovebgPreview1Icon,
            styles.collegeStudentImBachelorPosition,
          ]}
          contentFit="cover"
          source={require('./jay_profile.png')}
        />
        <Text style={[styles.mediaTechOperator, styles.mediaTechOperatorTypo]}>
          MEDIA TECH operator in Joyfull Chruch since 2017
        </Text>
        <Text style={[styles.playingTableTennis, styles.mediaTechOperatorTypo]}>
          Playing table tennis in the WES OLYMPICS since 2023, Malinta
          REPRESENTATIVE.
        </Text>
        <Image
          style={[styles.nRemovebgPreview1Icon, styles.removebgIconLayout]}
          contentFit="cover"
          source={require('./location.png')}
        />
        <Image
          style={[styles.nRemovebgPreview1Icon1, styles.removebgIconPosition]}
          contentFit="cover"
          source={require('./contact.png')}
        />
        <Image
          style={[styles.nRemovebgPreview1Icon2, styles.removebgIconLayout]}
          contentFit="cover"
          source={require('./email.png')}
        />
        <View style={[styles.androidSmall1Item, styles.androidLayout]} />
        <View style={styles.androidSmall1Inner} />
        <View style={[styles.rectangleView, styles.androidLayout]} />
        <View style={[styles.androidSmall1Child1, styles.androidLayout]} />
        <Image
          style={[styles.nRemovebgPreview1Icon3, styles.removebgIconPosition]}
          contentFit="cover"
          source={require('./birthday.png')}
        />
        <Text style={[styles.september282002, styles.september282002Layout]}>
          SEPTEMBER 28,2002
        </Text>
        <Text style={[styles.text, styles.textTypo]}>09957556603</Text>
        <Text style={[styles.valenzuelaCity, styles.textTypo]}>
          VALENZUELA CITY
        </Text>
        <Text
          style={[styles.dacubajayjaygmailcom, styles.september282002Layout]}>
          dacubajayjay@gmail.com
        </Text>
        return (
    <SafeAreaProvider> // Provides a safe area context to its children.
      <SafeAreaView style={{ flex: 1 }}> // View that automatically adjusts its padding to respect device's safe area.
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        </View> // Centering content within this view.
          <CustomCarousel
            data={dummyData} // Passing the dummyData as data source for the carousel.
            renderItem={({ item }) => { 

                <View style={styles.container}> // Container for each carousel item.
                   <Image source={require('./Tabletennis.jpg')} style={styles.picture} />
          <Image source={require('./T_SHIRT.jpg')} style={styles.picture} />
        </View>
        <View style={styles.Container}>
          <Image source={require('./Tabletennis.jpg')} style={styles.picture1} />
          <Image source={require('./CAP.jpg')} style={styles.picture1} />
        
                    style={styles.image}
                    resizeMode='contain' // Image will be scaled to fit within the container.
            
     />
          </View>
          </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'gray',  

  },

  androidSmall1: {
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  androidSmall1Child: {
    backgroundColor: '#4f565a',
    height: '100%',
    width: '100%', 
    position: 'absolute',
  },
  jayjayjay1IconPosition: {
    width: '100%', 
    position: 'absolute',
  },
  jayjayjay1Icon: {
    height: 140,
    width: '100%', 
  },
  jayJayJoria: {
    fontSize: 25,
    fontWeight: '600',
    fontFamily: 'interSemiBold',
    color: 'white',
    marginTop: 10,
  },
  logoLayout: {
    height: 30,
    width: 30,
    top: 193,
    position: 'absolute',
  },
  aboutMeTypo: {
    width: 227,
    color: 'maroon',
    fontSize:10,
    left: 9,
    fontFamily: 'interblack',
    fontWeight: '900',
    textAlign: 'left',
    position: 'absolute',
  },
  collegeStudentImBachelorPosition: {
    left: 8,
    position: 'absolute',
  },
  mediaTechOperatorTypo: {
    height: 20,
    fontSize: 8,
    fontFamily: 'interBlack',
    fontWeight: '900',
    textAlign: 'left',
    color: 'White',
    position: 'absolute',
  },
  removebgIconLayout: {
    height: 40,
    width: 40,
    position: 'absolute',
  },
  removebgIconPosition: {
    left: 64,
    height: 40,
    width: 40,
    position: 'absolute',
  },
  androidLayout: {
    height: 64,
    width: 139,
    backgroundColor: 'Gainsboro',
    position: 'absolute',
  },
  september282002Layout: {
    height: 22,
    width: 125,
    color: 'Gray',
    fontFamily: 'interRegular',
    textAlign: 'left',
    position: 'absolute',
  },
  textTypo: {
    textAlign: 'center',
    top: 618,
    height: 22,
    width: 132,
    color: 'Gray',
    fontFamily: 'interRegular',
    fontSize: 15,
    position: 'absolute',
  },
  androidSmall1Child: {
    backgroundColor: 'white',
  },
  jayjayjay1Icon: {
    top: 0,
    height: 140,
  },
  jayJayJoria: {
    top: 158,
    left: 148,
    fontSize: 25,
    fontWeight: '600',
    fontFamily: 'interSemiBold',
    width: 206,
    height: 27,
    textAlign: 'left',
    color: 'White',
    position: 'absolute',
  },
  igLogoRemovebgPreview1Icon: {
    left: 221,
  },
  xLogoRemovebgPreview1Icon: {
    top: 190,
    left: 263,
    width: 30,
    height: 30,
    position: 'absolute',
  },
  fbLogo11: {
    left: 165,
  },
  aboutMe: {
    top: 242,
    height: 44,
  },
  collegeStudentImBachelor: {
    top: 276,
    width: 300,
    height: 90,
    fontSize: 10,
    fontFamily: 'interBlack',
    fontWeight: '900',
    left: 8,
    textAlign: 'left',
    color: 'White',
  },
  otherInfo: {
    top: 371,
    height: 38,
  },
  jaycRemovebgPreview1Icon: {
    top: 85,
    width: 140,
    height: 142,
  },
  mediaTechOperator: {
    top: 409,
    left: 14,
    width: 250,
  },
  playingTableTennis: {
    top: 437,
    width: 319,
    left: 15,
  },
  nRemovebgPreview1Icon: {
    left: 243,
    top: 572,
  },
  nRemovebgPreview1Icon1: {
    top: 572,
  },
  nRemovebgPreview1Icon2: {
    left: 245,
    top: 488,
  },
  androidSmall1Item: {
    left: 195,
    top: 488,
  },
  androidSmall1Inner: {
    top: 570,
    height: 66,
    width: 139,
    backgroundColor: 'colorGainsboro',
    left: 15,
    position: 'absolute',
  },
  rectangleView: {
    left: 195,
    top: 572,
  },
  androidSmall1Child1: {
    top: 488,
    left: 15,
  },
  nRemovebgPreview1Icon3: {
    top: 494,
  },
  september282002: {
    top: 534,
    left: 22,
    fontSize: 15,
    height: 22,
    width: 132,
    color: 'Gray',
    fontFamily: 'interRegular',
  },
  text: {
    left: 18,
  },
  valenzuelaCity: {
    left: 195,
  },
  dacubajayjaygmailcom: {
    top: 533,
    left: 204,
    fontSize: 15,
    gallery: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Times New Roman',
    marginTop: 50,
  },
  image: {
    flex: 0.8, // Image takes 80% of the container space.
    width: '100%', // Full width of the container.
  },
  content: {
    flex: 0.4, // Content takes 40% of the container space.
    alignItems: 'center', // Centering items horizontally.
  },
  title: {
    fontSize: 24, // Font size for the title.
    fontWeight: 'bold', // Bold font weight for the title.
    color: '#333', // Color for the text.
  },
  description: {
    fontSize: 18, // Font size for the description.
    marginVertical: 12, // Vertical margin for the description.
    color: '#333', // Color for the text.
  },
  desc: {
    fontSize: 32, // Larger font size for additional text.
    fontWeight: 'bold', // Bold font weight for additional text.
  },
  androidSmall1Item: {
    top: 476,
    left: 101,
    borderRadius: 10,
    backgroundColor: 'white',
    width: 135,
    height: 34,
    position: 'absolute',
  },
 
  androidSmall1: {
    backgroundColor: 'White',
    flex: 1,
    width: '100%',
    overflow: 'hidden',
    height: 640,
  },
});

export default AndroidSmall;