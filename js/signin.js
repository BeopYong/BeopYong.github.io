// 항목별 유효성 검사

// 아이디
userId.onblur = () => {
    if(!/^.{4,10}$/.test(userId.value)){
        alert("아이디는 4~10자리로 설정해야 합니다.");
        return;
    }
    if(!/[0-9]/.test(userId.value)){
        alert("숫자를 하나 이상 포함해야 합니다.");
        return;
    }
    alert("유효한 아이디입니다.");
};

// 비밀번호
pw.onblur = () => {
    if(!/^.{8,12}$/.test(pw.value)){
        alert("비밀번호는 8~12자리로 설정해야 합니다.");
        return;
    }
    if(!/[a-zA-Z]/.test(pw.value) || !/[0-9]/.test(pw.value)){
        alert("영문자 또는 숫자를 포함해야 합니다.");
        return;
    }
    if(!/[!@&*]/.test(pw.value)){
        alert("특수문자 !@&* 중 하나 이상 포함해야 합니다.");
        return;
    }
    alert("유효한 비밀번호입니다.");
};

// 비밀번호 확인
pwCheck.onblur = () => {
    if(pw.value == pwCheck.value){
        alert("비밀번호가 일치합니다.");
        return true;
    }
    else{
        alert("비밀번호가 일치하지 않습니다.");
        return false;
    }
};

// 이름
userName.onblur = () => {
    if(!/^[가-힣]{2,}$/.test(userName.value)){
        alert("한글을 두 글자 이상 입력해야 합니다.");
        return;
    }
    alert("유효한 이름입니다.");
};

// 주민번호
document.querySelector("#btn-ssn").onclick = () => {
    const ssnNum = /^\d{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])-[1-4]\d{6}$/;
    if(ssnNum.test(ssn.value)){
        alert("유효한 번호입니다.")
    }
    else{
        alert("유효하지 않은 번호입니다.")
    }
};

// 이메일
email.onblur = () => {
    if(!/^[\w]{3,}@[\w]+\.[\w]+$/.test(email.value)){
        alert("이메일 형식에 맞게 작성해주세요.");
        return;
    }
    alert("유효한 이메일입니다.");
};