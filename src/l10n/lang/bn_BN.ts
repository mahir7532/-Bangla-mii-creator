import type { Strings } from "../strings";

export default {
  languages: {
    en_US: "ইংরেজি (US)",
  },
  actions: {
    disable: "অকার্যকর করুন",
    enable: "সক্রিয় করুন",
    edit: "সম্পাদনা",
    delete: "মুছে ফেলুন",
    export_download: "এক্সপোর্ট/ডাউনলোড",
    render: "রেন্ডার",
    no: "না",
    yes: "হ্যাঁ",
    save_and_exit: "সংরক্ষণ করুন & প্রস্থান করুন",
    exit_without_saving: "সংরক্ষণ ছাড়া প্রস্থান করুন",
    download: "ডাউনলোড",
  },
  generic: {
    app_title: "Mii নির্মাতা",
    camera: "ক্যামেরা",
    useMouseOrTouch: "ক্যামেরা ঘোরাতে মাউস বা টাচ ব্যবহার করুন।",
    pose: "ভঙ্গি",
    expression: "অভিব্যক্তি",
    render: "রেন্ডার",
    resolution_width: "প্রস্থ",
    resolution_height: "উচ্চতা",
    camera_field_of_view: "ক্যামেরার দৃশ্যক্ষেত্র",
  },
  alert: {
    audio_requires_action: {
      title: "অডিও ক্রিয়ার প্রয়োজন",
      description:
        "প্রথম ক্লিকে মিউজিক বাজতে শুরু করবে। ভলিউম পরিবর্তনের জন্য V চাপুন (ডিফল্ট 0.35)",
    },
    delete_confirmation: {
      title: "সতর্কতা",
      description: "আপনি কি নিশ্চিত যে এই Mii মুছে ফেলতে চান?",
    },
    choice: "আপনি কি করতে চান?",
  },
  pages: {
    mainMenu: {
      title: "প্রধান মেনু",
    },
    library: {
      title: "Mii লাইব্রেরি",
      options: "Mii অপশন",
      credits: {
        title: "ক্রেডিট",
        view: "ক্রেডিট দেখুন",
        datkat21: "সোর্স কোড: datkat21",
        ariankordi: "Mii রেন্ডারিং API: ariankordi",
        objecty: "Mii মেকার মিউজিক: objecty",
        localization: "%lang% অনুবাদক: %author%",
        general: "সাধারণ",
        translators: "অনুবাদক",
      },
      export: {
        title: "Mii এক্সপোর্ট",
        description: "আপনি কিভাবে Mii সংরক্ষণ করতে চান?",
        get_ffsd_hex: "FFSD (হেক্স) পান",
        get_ffsd_b64: "FFSD (বেস64) পান",
        save_ffsd_file: "FFSD (ফাইল) সংরক্ষণ করুন",
        save_miic_file: "MiiCreator ডেটা সংরক্ষণ করুন (সুপারিশকৃত)",
        get_mii_studio_data: "Mii স্টুডিও ডেটা পান",
        ffsd_modal: "FFSD কোড",
        mii_studio_data_modal: "Mii স্টুডিও ডেটা",
        generate_qr: "QR কোড তৈরি করুন",
        render_image: "একটি চিত্র রেন্ডার করুন",
        render_headshot: "হেডশট",
        render_full_body: "পূর্ণ দেহ",
        render_head_only: "শুধু মাথা",
        custom_render: "নিজের রেন্ডার তৈরি করুন",
      },
      custom_render: {
        title: "রেন্ডার প্রস্তুত করুন",
        head: "মাথা",
        full_body: "পূর্ণ দেহ",
        pose_unfinished_warning:
          "এই অংশ কিছুটা অসম্পূর্ণ, ভঙ্গিগুলো কাস্টম-মেড পুনঃনির্মাণ। ভঙ্গি ৩-এ মাথার ঘূর্ণন সমস্যা রয়েছে। বর্তমানে ভঙ্গি ৪-এর পরে কিছু করা হয়নি। Wii U ভঙ্গি যোগ করার চেষ্টা চলছে।",
        render_unfinished_warning:
          "রেন্ডার রেজোলিউশন অপশন এখানে থাকব যখন ফিচারটি প্রস্তুত হবে।",
        idle: "নিষ্ক্রিয়",
        pose: "ভঙ্গি %n%",
      },
    },
    editor: {
      choice: {
        color: "রঙ",
        favorite: "প্রিয়",
        gender: "লিঙ্গ",
        goatee: "গোটি",
        hat_color: "টুপি রঙ",
        hat: "টুপি",
        mustache: "মুস্তাচ",
        normal: "সাধারণ",
        position: "অবস্থান",
        special: "বিশেষ",
        type: "ধরণ",
      },
      quit: {
        title: "এডিটর থেকে প্রস্থান",
        description_no_changes:
          "কোন পরিবর্তন করা হয়নি। আপনি কি নিশ্চিত প্রস্থান করতে চান?",
        description_changes_made: "আপনি কি সংরক্ষণ করতে চান?",
      },
      warning_custom: `%custom% একটি কাস্টম বৈশিষ্ট্য, এটি অন্য কোনো ডেটা ফরম্যাটে স্থানান্তরিত হবে না।
এটি শুধুমাত্র ভিজ্যুয়াল এবং রেন্ডারের জন্য ব্যবহার করা যাবে।`,
    },
    saveData: {
      title: "ডেটা সংরক্ষণ করুন",
      import: "সংরক্ষণ ডেটা ইমপোর্ট করুন",
      export: "সংরক্ষণ ডেটা এক্সপোর্ট করুন",
    },
    settings: {
      title: "সেটিংস",
      settings_bgm: "পটভূমি সঙ্গীত",
      settings_sfx: "সাউন্ড ইফেক্ট",
    },
  },
} as Strings;
