var b = {
  languages: {
    en_US: "ইংরেজি (US)"
  },
  actions: {
    disable: "অক্ষম করুন",
    enable: "সক্ষম করুন",
    edit: "সম্পাদনা করুন",
    delete: "মুছুন",
    export_download: "রপ্তানি/ডাউনলোড",
    render: "রেন্ডার করুন",
    no: "না",
    yes: "হ্যাঁ",
    save_and_exit: "সংরক্ষণ করুন ও বের হয়ে যান",
    exit_without_saving: "সংরক্ষণ না করে বের হন",
    download: "ডাউনলোড"
  },
  generic: {
    app_title: "মি ক্রিয়েটর",
    camera: "ক্যামেরা",
    useMouseOrTouch: "ক্যামেরা সরানোর জন্য মাউস বা টাচ ব্যবহার করুন।",
    pose: "পোজ",
    expression: "অভিব্যক্তি",
    render: "রেন্ডার",
    resolution_width: "প্রস্থ",
    resolution_height: "উচ্চতা",
    camera_field_of_view: "ক্যামেরার FOV"
  },
  alert: {
    audio_requires_action: {
      title: "অডিওর জন্য পদক্ষেপ প্রয়োজন",
      description: "প্রথম ক্লিকে সঙ্গীত শুরু হবে। আপনি V চাপ দিয়ে সাউন্ড ভলিউম পরিবর্তন করতে পারেন (ডিফল্ট 0.35)"
    },
    delete_confirmation: {
      title: "সতর্কতা",
      description: "আপনি কি নিশ্চিত যে এই মি মুছে দিতে চান?"
    },
    choice: "আপনি কি করতে চান?"
  },
  pages: {
    mainMenu: {
      title: "মেইন মেনু"
    },
    library: {
      title: "মি লাইব্রেরি",
      options: "মি বিকল্পসমূহ",
      credits: {
        title: "ক্রেডিটস",
        view: "ক্রেডিটস দেখুন",
        datkat21: "সোর্স কোড: datkat21",
        ariankordi: "মি রেন্ডারিং API: ariankordi",
        objecty: "মি মেকার সঙ্গীত: objecty",
        localization: "%lang% দ্বারা %author%",
        general: "সাধারণ",
        translators: "অনুবাদকরা"
      },
      export: {
        title: "মি রপ্তানি",
        description: "আপনি কিভাবে মি সংরক্ষণ করতে চান?",
        get_ffsd_hex: "FFSD (হেক্স) নিন",
        get_ffsd_b64: "FFSD (Base64) নিন",
        save_ffsd_file: "FFSD (ফাইল) সংরক্ষণ করুন",
        save_miic_file: "MiiCreator ডেটা সংরক্ষণ করুন",
        get_mii_studio_data: "Mii Studio ডেটা নিন",
        ffsd_modal: "FFSD কোড",
        mii_studio_data_modal: "Mii Studio ডেটা",
        generate_qr: "QR কোড তৈরি করুন",
        render_image: "একটি ছবি রেন্ডার করুন",
        render_headshot: "হেডশট",
        render_full_body: "পূর্ণদেহ",
        render_head_only: "শুধুমাত্র মাথা",
        custom_render: "নিজের রেন্ডার তৈরি করুন"
      },
      custom_render: {
        title: "রেন্ডার প্রস্তুত করুন",
        head: "মাথা",
        full_body: "পূর্ণদেহ",
        pose_unfinished_warning: "এই অংশটি কিছুটা অসম্পূর্ণ, পোজগুলো কাস্টম-নির্মিত পুনর্নির্মাণ তাই সম্পূর্ণ সঠিক নয়। পোজ ৩-এ মাথার ঘূর্ণন সমস্যা আছে কারণ এটি দেহের সাথে যুক্ত মনে করার জন্য পরিবর্তন করা হয়েছে। এছাড়াও পোজ ৪-এর পর কিছু করা হয়নি। আমি Wii U পোজ সরাসরি যোগ করার একটি উপায়ে কাজ করছি।",
        render_unfinished_warning: "ফিচার প্রস্তুত হলে এখানে রেন্ডার রেজোলিউশন বিকল্প থাকবে।",
        idle: "অপেক্ষা",
        pose: "পোজ %n%"
      }
    }
  },
  editor: {
    choice: {
      color: "রঙ",
      favorite: "প্রিয়",
      gender: "লিঙ্গ",
      goatee: "গোটি",
      hat_color: "টুপি রঙ",
      hat: "টুপি",
      mustache: "মুস্ট্যাশ",
      normal: "সাধারণ",
      position: "অবস্থান",
      special: "বিশেষ",
      type: "ধরন"
    },
    quit: {
      title: "এডিটর থেকে বের হচ্ছেন",
      description_no_changes: "কোনো পরিবর্তন করা হয়নি। আপনি কি সত্যিই বের হতে চান?",
      description_changes_made: "আপনি কি সংরক্ষণ করতে চান?"
    },
    warning_custom: "`%custom%` একটি কাস্টম প্রোপার্টি, এবং অন্য কোনো ডেটা ফরম্যাটে স্থানান্তরিত হবে না। এটি সম্পূর্ণ ভিজ্যুয়াল এবং রেন্ডারে ব্যবহারের জন্য প্রদান করা হয়েছে।"
  },
  saveData: {
    title: "ডেটা সংরক্ষণ করুন",
    import: "ডেটা আমদানি করুন",
    export: "ডেটা রপ্তানি করুন"
  },
  settings: {
    title: "সেটিংস",
    settings_bgm: "ব্যাকগ্রাউন্ড সঙ্গীত",
    settings_sfx: "সাউন্ড এফেক্টস"
  }
};

export { b as default };
