const role = {
    ADMIN:'admin',
    USER:'user'
}

const activeFor =  4 * 60 * 60 * 1000

const status = {
    ACTIVE:'active',
    INACTIVE:'inactive'
}
const FileFilterType = {
    IMAGE : 'image',
    VIDEO : 'video',
    DOCUMENT : 'doc',
    AUDIO : 'audio',
    IMAGE_VIDEO: 'image_video'
}

const NoticeCategory = {
    ACADEMIC:'academic',
    ADMINISTRATIVE:'administrative',
    EVENTS:'events',
    POLICY:'policy'
}

const NoticePriority = {
    HIGH:'high',
    NORMAL:'normal',
}

module.exports = {
    role,
    activeFor,
    status,
    FileFilterType,
    NoticeCategory,
    NoticePriority
}