-- CreateTable
CREATE TABLE `Group` (
    `uuid` VARCHAR(191) NOT NULL,
    `closed` BOOLEAN NOT NULL DEFAULT false,
    `reason` VARCHAR(500) NULL,
    `creatorId` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`uuid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `uuid` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `lastName` VARCHAR(191) NOT NULL,
    `instagramUsername` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `dateOfBirth` DATETIME(3) NOT NULL,
    `groupId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_instagramUsername_key`(`instagramUsername`),
    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`uuid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Group` ADD CONSTRAINT `Group_creatorId_fkey` FOREIGN KEY (`creatorId`) REFERENCES `User`(`uuid`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_groupId_fkey` FOREIGN KEY (`groupId`) REFERENCES `Group`(`uuid`) ON DELETE RESTRICT ON UPDATE CASCADE;
