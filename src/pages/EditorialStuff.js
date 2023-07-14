import React from "react";
import data from "../data/membership.json";
function EditorialStuff() {
    return (
        <>
            <h2 className="content-title">Editorial Board Membership:</h2>

            <div className="membership">
                <div className="member">
                    <img
                        src="./images/kurilo_1.jpg"
                        alt=""
                        className="member-img"
                    />
                    <div className="member-text-wrapper">
                        <i>Editor-in-Chief</i>
                        <p>
                            <b>Kurylo V.S.</b>, Doctor of Pedagogical Sciences,
                            Professor, Academician of the National Academy of
                            Pedagogical Sciences of Ukraine, Rector, Luhansk
                            Taras Shevchenko National University (Luhansk,
                            Ukraine)
                        </p>
                    </div>
                </div>
                <div className="member">
                    <img
                        src="./images/savchenko.jpg"
                        alt=""
                        className="member-img"
                    />
                    <div className="member-text-wrapper">
                        <i>Associate Editor</i>
                        <p>
                            <b>Savchenko S.V.</b>, Doctor of Pedagogical
                            Sciences, Full Professor, First Vice-Rector, Luhansk
                            Taras Shevchenko National University (Luhansk,
                            Ukraine)
                        </p>
                    </div>
                </div>
                <div className="member">
                    <img
                        src="./images/loboda.jpg"
                        alt=""
                        className="member-img"
                    />
                    <div className="member-text-wrapper">
                        <i>Executive Editor</i>
                        <p>
                            <b>Loboda S. M.</b>, Doctor of Pedagogical Sciences,
                            Full Professor, Chair of the Department of
                            Publishing, Advertising, and Public Relations ,
                            Luhansk Taras Shevchenko National University
                            (Luhansk, Ukraine)
                        </p>
                    </div>
                </div>
                <br />
                <i>Members of Editorial Board:</i> <br /> <br />
                {data &&
                    data.map((member) => {
                        const { name, text, image } = member;
                        return (
                            <div className="member">
                                <img
                                    src={image}
                                    alt=""
                                    className="member-img"
                                    width={90}
                                    height={120}
                                />
                                <div className="member-text-wrapper">
                                    <p>
                                        <b>{name}</b>,{text}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                {/* <div className="member">
                    <img
                        src="./images/dolgova.jpg"
                        alt=""
                        className="member-img"
                        width={90}
                        height={120}
                    />
                    <div className="member-text-wrapper">
                        <p>
                            <b>Dolgova Irina Evdokimovna</b>, Associate
                            Professor, Candidate of Economic Sciences, Chief
                            Scientist University of Public Security of the
                            Republik of Uzbekistan
                        </p>
                    </div>
                </div>
                <div className="member">
                    <img
                        src="./images/sodikov.png"
                        alt=""
                        className="member-img"
                        width={90}
                        height={120}
                    />
                    <div className="member-text-wrapper">
                        <p>
                            <b>Sodikov Akmal</b>, PhD in Law, associate
                            professor of Tashkent State University of Law,
                            Uzbekistan
                        </p>
                    </div>
                </div>
                <div className="member">
                    <img
                        src="./images/kozimjonov.jpg"
                        alt=""
                        className="member-img"
                        width={90}
                        height={120}
                    />
                    <div className="member-text-wrapper">
                        <p>
                            <b>Kozimjonov Abrorbek</b>, PhD, Senior lecturer of
                            Tashkent State University of Economics
                        </p>
                    </div>
                </div>
                <div className="member">
                    <img
                        src="./images/mustafaeva.jpg"
                        alt=""
                        className="member-img"
                        width={90}
                        height={120}
                    />
                    <div className="member-text-wrapper">
                        <p>
                            <b>Mustafaeva Mamlakat Ismailovna</b>, Senior
                            lecturer of Bukhara state medical institute named
                            after Abu Ali ibn Sina of the Republic of Uzbekistan
                        </p>
                    </div>
                </div>
                <div className="member">
                    <img
                        src="./images/pazilova.png"
                        alt=""
                        className="member-img"
                        width={90}
                        height={120}
                    />
                    <div className="member-text-wrapper">
                        <p>
                            <b>Pazilova Dilnoza Ziyavutdinovna</b>, PhD
                            Associate Professor, Department of Design and
                            Technology of Leather Goods
                        </p>
                    </div>
                </div>
                <div className="member">
                    <img
                        src="./images/khudayberganov.jpg"
                        alt=""
                        className="member-img"
                        width={90}
                        height={120}
                    />
                    <div className="member-text-wrapper">
                        <p>
                            <b>Khudayberganov Ravshonbek Khudaybergan o'gli</b>,
                            TASHKENT STATE TRANSPORT UNIVERSITY, "SOCIAL
                            SCIENCES" DEPARTMENT, PROFESSOR V.B. DOCTOR OF
                            PHILOSOPHY (DSc)
                        </p>
                    </div>
                </div>
                <div className="member">
                    <img
                        src="./images/pirakhunova.jpg"
                        alt=""
                        className="member-img"
                        width={90}
                        height={120}
                    />
                    <div className="member-text-wrapper">
                        <p>
                            <b>Pirakhunova Farida Nurmamatovna</b>,
                            INTERNATIONAL SCHOOL OF FINANCE TECHNOLOGY AND
                            SCIENCE, Candidate of Biological Sciences, Associate
                            Professor, Professor of the Russian Academy of
                            Natural Sciences
                        </p>
                    </div>
                </div>
                <div className="member">
                    <img
                        src="./images/sematov.png"
                        alt=""
                        className="member-img"
                        width={90}
                        height={120}
                    />
                    <div className="member-text-wrapper">
                        <p>
                            <b>Samatov Muhiddin Ahadovich</b>, English teacher,
                            Karshi Engineering lnstitute.
                        </p>
                    </div>
                </div>
                <div className="member">
                    <img
                        src="./images/Tosheva.png"
                        alt=""
                        className="member-img"
                        width={90}
                        height={120}
                    />
                    <div className="member-text-wrapper">
                        <p>
                            <b>Tosheva Gulnora</b>, Bukhara Institute of
                            Engineering and Technology Senior teacher of
                            "Metrology and standardization" department
                        </p>
                    </div>
                </div>
                <div className="member">
                    <img
                        src="./images/Bekkulov.jpg"
                        alt=""
                        className="member-img"
                        width={90}
                        height={120}
                    />
                    <div className="member-text-wrapper">
                        <p>
                            <b>Bekkulov Batirali Rakhmonkulovich</b>, Head of
                            the department "General technical disciplines" of
                            the Andijan Machine-Building Institute, Doctor of
                            Philosophy in Engineering Sciences, Associate
                            Professor.
                        </p>
                    </div>
                </div>
                <div className="member">
                    <img
                        src="./images/Akhmedova.jpg"
                        alt=""
                        className="member-img"
                        width={90}
                        height={120}
                    />
                    <div className="member-text-wrapper">
                        <p>
                            <b>Akhmedova Nilufar Makmudjanovna</b>, Andijan
                            State Medical Institute. Department of Obstetrics
                            and Gynecology №1
                        </p>
                    </div>
                </div>
                <div className="member">
                    <img
                        src="./images/Sobirov.jpg"
                        alt=""
                        className="member-img"
                        width={90}
                        height={120}
                    />
                    <div className="member-text-wrapper">
                        <p>
                            <b>Sobirov Holhuja Abbozovich</b>, associate
                            professor of Andijan machine building institute
                        </p>
                    </div>
                </div>
                <div className="member">
                    <img
                        src="./images/Sherali.jpg"
                        alt=""
                        className="member-img"
                        width={90}
                        height={120}
                    />
                    <div className="member-text-wrapper">
                        <p>
                            <b>Sherali T. Kuldashev</b>, Candidate of Historical
                            Sciences, Associate Professor Abu Rayhan Biruni
                            Institute of Oriental Studies of the Academy of
                            Sciences of the Republic of Uzbekistan Uzbekistan
                        </p>
                    </div>
                </div>
                <div className="member">
                    <img
                        src="./images/khabibov.jpg"
                        alt=""
                        className="member-img"
                        width={90}
                        height={120}
                    />
                    <div className="member-text-wrapper">
                        <p>
                            <b>Khabibov Fakhriddin Yusupovich</b>, born in 1981.
                            Graduated from the Bukhara Institute of Food and
                            Light Industry Technology in 2005 with a master's
                            degree in "Food Industry Machines and Apparatus".
                            Since 2020, he has the title of Doctor of Philosophy
                            (PhD) in technical sciences, since 2022 he has the
                            title of associate professor.
                        </p>
                    </div>
                </div>
                <div className="member">
                    <img
                        src="./images/nabiev.jpg"
                        alt=""
                        className="member-img"
                        width={90}
                        height={120}
                    />
                    <div className="member-text-wrapper">
                        <p>
                            <b>Nabiev Muhammadjon Borievich</b> was born in
                            1958. In 1984, M.B. Nabiev graduated from the
                            Bukhara Institute of Food and Light Industry
                            Technology, majoring in agricultural machinery. From
                            1984, he was the chief laboratory assistant,
                            assistant of the "Theory of Machines and Mechanisms"
                            department of Bukh OO and ESTI, then assistant of
                            the "Mechanics" department, 1st category in
                            1996-2000, leading specialist in natural science of
                            Bukhara region
                        </p>
                    </div>
                </div>
                <div className="member">
                    <img
                        src="./images/Davlyatova.jpg"
                        alt=""
                        className="member-img"
                        width={90}
                        height={120}
                    />
                    <div className="member-text-wrapper">
                        <p>
                            <b>Davlyatova Mavlyuda Bakhtiyorovna</b>, Bukhara
                            Institute of Engineering and Technology, Associate
                            Professor of the Department of "Metrology and
                            Standardization".
                        </p>
                    </div>
                </div>
                <div className="member">
                    <img
                        src="./images/Khasanova.jpg"
                        alt=""
                        className="member-img"
                        width={90}
                        height={120}
                    />
                    <div className="member-text-wrapper">
                        <p>
                            <b>Khasanova Zebo Davlatovna</b>, Bukhara Institute
                            of Engineering and Technology associate professor of
                            metrology and standardization department
                        </p>
                    </div>
                </div>
                <div className="member">
                    <img
                        src="./images/Tairov.png"
                        alt=""
                        className="member-img"
                        width={90}
                        height={120}
                    />
                    <div className="member-text-wrapper">
                        <p>
                            <b>Tairov Bakhtiyor Bobokulovich</b>, Bukhara
                            Institute of Engineering Technology, Head of the
                            "metrology and standardization" department,
                            associate professor
                        </p>
                    </div>
                </div>
                <div className="member">
                    <img
                        src="./images/Makhmudov.jpg"
                        alt=""
                        className="member-img"
                        width={90}
                        height={120}
                    />
                    <div className="member-text-wrapper">
                        <p>
                            <b>Makhmudov Yusup Ganievich</b>, Professor of
                            Termez State University, Doctor of Pedagogical
                            Sciences.
                        </p>
                    </div>
                </div>
                <div className="member">
                    <img
                        src="./images/Musayeva.png"
                        alt=""
                        className="member-img"
                        width={90}
                        height={120}
                    />
                    <div className="member-text-wrapper">
                        <p>
                            <b>Musayeva Rano Khalikovna</b>, Associate
                            Professor, Candidate of Technical Sciences of the
                            Department "Processes and devices of the food and
                            chemical industry
                        </p>
                    </div>
                </div>
                <div className="member">
                    <img
                        src="./images/Khuzhakulov.jpg"
                        alt=""
                        className="member-img"
                        width={90}
                        height={120}
                    />
                    <div className="member-text-wrapper">
                        <p>
                            <b>Khuzhakulov Aziz Fayzullayevich</b>, Senior
                            Lecturer Oil refining technology
                        </p>
                    </div>
                </div>
                <div className="member">
                    <img
                        src="./images/GAYBULLAEV.JPG"
                        alt=""
                        className="member-img"
                        width={90}
                        height={120}
                    />
                    <div className="member-text-wrapper">
                        <p>
                            <b>Z.X. GAYBULLAEV</b>, BUKHARA ENGINEERING AND
                            TECHNOLOGY INSTITUTE Associate professor of the
                            Department” fundamentals of mechanics
                        </p>
                    </div>
                </div>
                <div className="member">
                    <img
                        src="./images/sharifov.jpg"
                        alt=""
                        className="member-img"
                        width={90}
                        height={120}
                    />
                    <div className="member-text-wrapper">
                        <p>
                            <b>SHARIFOV GULOMJON NABIYEVICH</b>, doctor of
                            philosophy in technical sciences, senior teacher of
                            the department "Chemistry and its teaching
                            methodology" at Jizzakh State Pedagogical University
                        </p>
                    </div>
                </div>
                <div className="member">
                    <img
                        src="./images/umarova.jpg"
                        alt=""
                        className="member-img"
                        width={90}
                        height={120}
                    />
                    <div className="member-text-wrapper">
                        <p>
                            <b>Umarova Makhliyo Yunusovna</b>, Uzbekistan State
                            World Languages University. Doctor of Sciences
                        </p>
                    </div>
                </div>
                <div className="member">
                    <img
                        src="./images/pirnazarov.jpg"
                        alt=""
                        className="member-img"
                        width={90}
                        height={120}
                    />
                    <div className="member-text-wrapper">
                        <p>
                            <b>Pirnazarov Abdurasul Umatalievich</b>, Doctor of
                            Technical Sciences, Dean of faculty, Namangan
                            Institute of Engineering and Technology (Namangan,
                            Uzbekistan)
                        </p>
                    </div>
                </div>
                <div className="member">
                    <img
                        src="./images/toshev.png"
                        alt=""
                        className="member-img"
                        width={90}
                        height={120}
                    />
                    <div className="member-text-wrapper">
                        <p>
                            <b>Toshev Akmal Yusupovich</b>, Doctor of Sciences,
                            Professor, Department of Design and Technology of
                            Leather Goods
                        </p>
                    </div>
                </div>
                <div className="member">
                    <img
                        src="./images/ziyotova.jpg"
                        alt=""
                        className="member-img"
                        width={90}
                        height={120}
                    />
                    <div className="member-text-wrapper">
                        <p>
                            <b>Surayyo Ziyotova Erkin qizi</b>, PhD, docent,
                            University of Tashkent for Applied Sciences.
                        </p>
                    </div>
                </div>
                <div className="member">
                    <img
                        src="./images/xujaniyazova.jpg"
                        alt=""
                        className="member-img"
                        width={90}
                        height={120}
                    />
                    <div className="member-text-wrapper">
                        <p>
                            <b>Shahnoza Xo'janiyazova Satimbayevna</b>, PhD,
                            docent, University of Tashkent for Applied Sciences.
                        </p>
                    </div>
                </div>
                <div className="member">
                    <img
                        src="./images/Kurbanov.png"
                        alt=""
                        className="member-img"
                        width={90}
                        height={120}
                    />
                    <div className="member-text-wrapper">
                        <p>
                            <b>Kurbanov Murod</b>, Bukhara engineering
                            technological institute Technology and biotechnology
                            of handling,storage and processing agricultural and
                            foodstuff.
                        </p>
                    </div>
                </div>
                <div className="member">
                    <img
                        src="./images/Yusupov.jpg"
                        alt=""
                        className="member-img"
                        width={90}
                        height={120}
                    />
                    <div className="member-text-wrapper">
                        <p>
                            <b>Yusupov Konisbay Abilovich</b>, Karakalpak State
                            University Doctor of Pedagogical Sciences,
                            Professor.
                        </p>
                    </div>
                </div>
                <div className="member">
                    <img
                        src="./images/Savriev.jpg"
                        alt=""
                        className="member-img"
                        width={90}
                        height={120}
                    />
                    <div className="member-text-wrapper">
                        <p>
                            <b>Savriev Yoldosh Safarovich</b>, Bukhara institute
                            of engineering - technology department of "Bases of
                            mechanics" (PhD), senior lecturer.
                        </p>
                    </div>
                </div>
                <div className="member">
                    <img
                        src="./images/Ruziev.jpg"
                        alt=""
                        className="member-img"
                        width={90}
                        height={120}
                    />
                    <div className="member-text-wrapper">
                        <p>
                            <b>Ruziev Ilhomjon Maxmudovich</b>, Doctor of
                            Philosophy (PhD)of Technical sciences, acting
                            temporarily. Associate Professor of the Department
                            of "Hydrology and Hydrogeology" of the "Tashkent
                            institute of irrigation and agricultural
                            mechanization engineers" National research
                            university.
                        </p>
                    </div>
                </div>
                <div className="member">
                    <img
                        src="./images/Normamatov.png"
                        alt=""
                        className="member-img"
                        width={90}
                        height={120}
                    />
                    <div className="member-text-wrapper">
                        <p>
                            <b>Normamatov Ikhtiyar Bakhtiyarovich</b>. I was
                            born on October 13, 1969 in Chirakchi District,
                            Kashkadarya Region, my specialty is an economist, my
                            teaching experience in higher education is 16 years.
                            Currently, I am an associate professor at the
                            "Innovative Economy" department of the Karshi
                            Institute of Engineering Economics.
                        </p>
                    </div>
                </div> */}
                {/*  */}
                <br />
                <i>Correctors of English Edition</i>
                <br />
                <b>Apalkova Ya. V.,</b>
                <br />
                <b>Savel'yeva N. O.</b>
                <br />
                <b>Shpagina O.V.</b>
                <br />
                <br />
                {/*  */}
                <i>Corrector of Ukrainian Edition</i>
                <p>
                    <b>Mileva I.V.</b>, Candidate of Philological Sciences,
                    Assistant Professor of the Ukrainian Language Department of
                    Luhansk Taras Shevchenko National University (Luhansk,
                    Ukraine)
                </p>
                <br /> <br />
                {/*  */}
                <i>Corrector of Russian Edition</i>
                <p>
                    <b>Sobolieva I. O.</b>, Candidate of Philological Sciences,
                    Assistant Professor of the Department of Russian Linguistics
                    and Communicative Technologies, Luhansk Taras Shevchenko
                    National University (Luhansk, Ukraine)
                </p>
            </div>
        </>
    );
}

export default EditorialStuff;
