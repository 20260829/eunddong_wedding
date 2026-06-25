/**
 * Modern Minimal Wedding Invitation Configuration
 *
 * Edit the values below to customize your wedding invitation.
 * Image files should be placed in the corresponding images/ subfolders
 * using sequential filenames (1.jpg, 2.jpg, ...).
 * The code auto-detects images by trying sequential filenames.
 *
 * Image folder conventions:
 *   images/hero/1.jpg       - Main wedding photo (single file)
 *   images/story/1.jpg, ... - Story section photos (auto-detected)
 *   images/gallery/1.jpg, . - Gallery photos (auto-detected)
 *   images/location/1.jpg   - Venue/map image (single file)
 *   images/og/1.jpg         - Kakao share thumbnail (single file)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "신동규",
    nameEn: "신동규",
    father: "신용붕",
    mother: "김미경",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "김은혜",
    nameEn: "김은혜",
    father: "김수진",
    mother: "김경희",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-08-29",
    time: "13:00",
    venue: "CA 웨딩 컨벤션",
    hall: "블리스홀",
    address: "충남 아산시 배방읍 희망로 100 KTX역사내 2층",
    tel: "041-520-9999",
    mapLinks: {
      kakao: "https://place.map.kakao.com/20807979",
      naver: "https://map.naver.com/v5/entry/place/31363497/"
    }
  },

  // ── 인사말 ──
  invitation: {
    title: "소중한 분들을 초대합니다",
    message: "때론 오래된 친구처럼\n때론 처음 만나는 사람처럼\n그 많은 당신을\n다 사랑하고싶습니다.\n<사랑고백, 이준호>"
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "신동규", bank: "농협은행", number: "352-1267-0537-63" },
      { role: "어머니", name: "김미경", bank: "농협은행", number: "451-0106-6361" }
    ],
    bride: [
      { role: "신부", name: "김은혜", bank: "신한은행", number: "110-418-980212" },
      { role: "아버지", name: "김수진", bank: "OO은행", number: "000-000-000000" },
      { role: "어머니", name: "김경희", bank: "OO은행", number: "000-000-000000" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  kakaoShare: {
    jsKey: "",
    title: "동규 ♥ 은혜 결혼합니다!",
    description: ""
  }
};
